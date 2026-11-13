---
title: 'GRE tunnel on Junos'
description: 'gr- interface with ISIS adjacency and reachability over the tunnel.'
pubDate: '2019-03-30'
tags: ['network', 'juniper', 'labs']
---


GRE supports IP, IPX, AppleTalk, CLNS (ISO), and more.

## Steps

1. Configure `gr-0/0/0.0` with tunnel source/destination, MTU, and fragmentation  
2. Enable ISO to support ISIS  
3. Enable ISIS on the LAN and GRE interfaces  

```text
root@R1> show configuration interfaces gr-0/0/0.0
clear-dont-fragment-bit;
tunnel {
    source 198.51.100.1;
    destination 203.0.113.2;
    allow-fragmentation;
    path-mtu-discovery;
}
family inet {
    mtu 1524;
    address 192.168.0.1/30;
}
family iso;
```

```text
root@R1> show configuration protocols isis
interface gr-0/0/0.0;
interface ge-0/0/1.0;
```

## Verification

```text
root@R1> show isis adjacency
Interface     System  L  State  Hold (secs)  SNPA
gr-0/0/0.0    R2      3  Up            25

root@R1> show route protocol isis
172.23.7.0/24 *[IS-IS/15] ...
                > to 192.168.0.2 via gr-0/0/0.0
```

```text
root@Ubuntu-1:~# ping 172.23.7.2
64 bytes from 172.23.7.2: icmp_seq=1 ttl=62 time=3.52 ms
```
