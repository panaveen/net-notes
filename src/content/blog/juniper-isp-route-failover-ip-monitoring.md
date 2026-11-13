---
title: 'Juniper SRX: automatic ISP failover with IP monitoring'
description: 'Use RPM + ip-monitoring so a static default route fails over when the primary ISP next hop goes blackhole.'
pubDate: '2020-09-01'
tags: ['network', 'juniper', 'labs']
---


## Why static routes alone are not enough

Static defaults do not track next-hop reachability. If ISP1’s next hop becomes unreachable but the local interface stays up, traffic can **blackhole** until you manually remove the primary static.

## Lab idea

Dual ISP on vSRX:

- Primary ISP1 next hop `1.1.1.1`
- Backup ISP2 next hop `2.1.1.1`
- Monitor an Internet test target (example `5.1.1.2`) via ISP1

When the probe fails, install a preferred default via ISP2.

## Configuration

```text
set services rpm probe Internet-Server test test-srv target address 5.1.1.2
set services rpm probe Internet-Server test test-srv probe-count 5
set services rpm probe Internet-Server test test-srv probe-interval 5
set services rpm probe Internet-Server test test-srv test-interval 3
set services rpm probe Internet-Server test test-srv thresholds successive-loss 5
set services rpm probe Internet-Server test test-srv destination-interface ge-0/0/0.0
set services rpm probe Internet-Server test test-srv hardware-timestamp
set services rpm probe Internet-Server test test-srv next-hop 1.1.1.1

set services ip-monitoring policy Internet match rpm-probe Internet-Server
set services ip-monitoring policy Internet then preferred-route route 0.0.0.0/0 next-hop 2.1.1.1
```

## Failover behavior

When ISP1 next hop is down:

```text
root@CE> ping 1.1.1.1 rapid
... 100% packet loss

root@CE> show route
0.0.0.0/0  *[Static/1] ...
             > to 2.1.1.1 via ge-0/0/1.0    <-- IP monitor installs ISP2
           [Static/5] ...
             > to 1.1.1.1 via ge-0/0/0.0
```

LAN host traceroute then exits via ISP2 (`2.1.1.1`).
