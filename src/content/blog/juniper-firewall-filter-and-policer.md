---
title: 'Juniper firewall filter and policer'
description: 'Filter ICMP from JR2→CR1, allow OSPF, reject the rest — then rate-limit with a policer.'
pubDate: '2018-12-19'
tags: ['network', 'juniper', 'security', 'labs']
---


Lab goal: filter and rate-limit traffic from **JR2** (Junos) toward **CR1** (Cisco). OSPF is up end-to-end. The filter is applied **outbound** on JR1 `ge-0/0/1` toward CR1.

## Firewall filter

```text
root@JR1# edit firewall family inet filter JR2_TO_CR1
root@JR1# show
term ALLOW_ICMP {
    from {
        source-address {
            222.222.222.2/32;
        }
        protocol icmp;
    }
    then {
        policer P1;
        count JR2_CR1;
        log;
    }
}
term ALLOW_OSPF {
    from {
        protocol ospf;
    }
    then accept;
}
term CATCH_ALL {
    then {
        reject;
    }
}
```

Apply on the link toward CR1:

```text
ge-0/0/1 {
    unit 0 {
        family inet {
            filter {
                output JR2_TO_CR1;
            }
            address 10.10.0.1/24;
        }
    }
}
```

Verify counters / log:

```text
root@JR1> show firewall filter JR2_TO_CR1
Filter: JR2_TO_CR1
Counters:
Name      Bytes  Packets
JR2_CR1   22060  137

root@JR1# run show firewall log
Time     Filter Action Interface Protocol Src Addr       Dest Addr
22:31:28 pfe    A      ge-0/0/0.0 ICMP     222.222.222.2  100.100.100.1
...
```

From JR2:

```text
root@JR2> ping 100.100.100.1 source 222.222.222.2 rapid
!!!!!
--- 100.100.100.1 ping statistics ---
5 packets transmitted, 5 packets received, 0% packet loss
```

## Rate limiting

Policer attached as a non-terminating action in `ALLOW_ICMP`:

```text
[edit firewall policer P1]
root@JR1# show
if-exceeding {
    bandwidth-limit 64k;
    burst-size-limit 4k;
}
then discard;
```

Large pings from JR2 show intermittent loss:

```text
root@JR2> ping 100.100.100.1 source 222.222.222.2 rapid count 10 size 1600
!!.!!!.!!.
--- 100.100.100.1 ping statistics ---
10 packets transmitted, 7 packets received, 30% packet loss
```

```text
root@JR1> show firewall filter JR2_TO_CR1
Filter: JR2_TO_CR1
Counters:
Name      Bytes  Packets
JR2_CR1   22480  142
Policers:
Name           Bytes  Packets
P1-ALLOW_ICMP  4500   3
```
