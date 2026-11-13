---
title: 'Juniper BGP implementation (iBGP + eBGP)'
description: 'vMX lab: iBGP over static or OSPF, then eBGP with an export policy for loopbacks.'
pubDate: '2018-12-02'
tags: ['network', 'juniper', 'labs']
---


- **iBGP** between vMX-1 and vMX-2 (static route or OSPF)
- **eBGP** between vMX-1 and vMX-3

## iBGP with a static route

### Interfaces

```text
root@vMX-1> show configuration interfaces | display set
set interfaces ge-0/0/0 unit 0 family inet address 10.1.12.1/24
set interfaces lo0 unit 0 family inet address 1.1.1.1/32
```

### Routing

```text
root@vMX-1> show configuration routing-options | display set
set routing-options static route 2.2.2.2/32 next-hop 10.1.12.2
set routing-options autonomous-system 65000
```

### BGP neighbor

```text
set protocols bgp group iBGP type internal
set protocols bgp group iBGP neighbor 2.2.2.2 local-address 1.1.1.1
```

`local-address` sources iBGP from the loopback. Junos is CIDR-only — no IOS-style `no auto-summary`.

```text
root@vMX-1> show bgp neighbor 2.2.2.2 | match Established
Type: Internal  State: Established
```

## iBGP with IGP (OSPF)

```text
set protocols ospf area 0.0.0.0 interface ge-0/0/0.0
set protocols ospf area 0.0.0.0 interface lo0.0 passive
```

```text
root@vMX-1> show ospf neighbor
Address     Interface     State  ID       Pri  Dead
10.1.12.2   ge-0/0/0.0    Full   2.2.2.2  128  32

root@vMX-1> show bgp summary
Peer     AS     State|#Active/Received/Accepted/Damped...
2.2.2.2  65000  0/0/0/0  0/0/0/0
```

## eBGP

**vMX-1**

```text
set protocols bgp group iBGP type internal
set protocols bgp group iBGP neighbor 2.2.2.2 local-address 1.1.1.1
set protocols bgp group eBGP type external
set protocols bgp group eBGP neighbor 10.1.13.3 peer-as 65001
```

**vMX-3**

```text
set protocols bgp group eBGP type external
set protocols bgp group eBGP neighbor 10.1.13.1 peer-as 65000
```

### Export loopback

```text
set policy-options policy-statement EBGP_ADV_LOOPBACK term ADV_LO0 from protocol direct
set policy-options policy-statement EBGP_ADV_LOOPBACK term ADV_LO0 from route-filter 1.1.1.1/32 exact
set policy-options policy-statement EBGP_ADV_LOOPBACK term ADV_LO0 then accept
set protocols bgp group eBGP neighbor 10.1.13.3 export EBGP_ADV_LOOPBACK
```

### Verification

```text
root@vMX-1> show route protocol bgp
3.3.3.3/32  *[BGP/170] ...
              > to 10.1.13.3 via ge-0/0/1.0

root@vMX-1> show route receive-protocol bgp 10.1.13.3
* 3.3.3.3/32  10.1.13.3  65001 I
```
