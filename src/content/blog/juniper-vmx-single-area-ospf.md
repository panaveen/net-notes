---
title: 'Juniper vMX — single-area OSPF'
description: 'Three-node vMX triangle in area 0 with LLDP, loopbacks, and verification commands.'
pubDate: '2018-11-26'
tags: ['network', 'juniper', 'labs']
---


## vMX-1

```text
set system host-name vMX-1
set system root-authentication plain-text-password
set protocols lldp interface all
set interfaces ge-0/0/0 unit 0 description "vMX-2"
set interfaces ge-0/0/0 unit 0 family inet address 10.42.12.1/24
set interfaces ge-0/0/1 unit 0 description "vMX-3"
set interfaces ge-0/0/1 unit 0 family inet address 10.42.13.1/24
set interfaces lo0 unit 0 family inet address 1.1.1.1/32

set protocols ospf area 0 interface ge-0/0/0.0
set protocols ospf area 0 interface ge-0/0/1.0
set protocols ospf area 0 interface lo0.0 passive
```

## vMX-2

```text
set system host-name vMX-2
set system root-authentication plain-text-password
set protocols lldp interface all
set interfaces ge-0/0/0 unit 0 description "vMX-1"
set interfaces ge-0/0/0 unit 0 family inet address 10.42.12.2/24
set interfaces ge-0/0/1 unit 0 description "vMX-3"
set interfaces ge-0/0/1 unit 0 family inet address 10.42.23.2/24
set interfaces lo0 unit 0 family inet address 2.2.2.2/32

set protocols ospf area 0 interface ge-0/0/0.0
set protocols ospf area 0 interface ge-0/0/1.0
set protocols ospf area 0 interface lo0.0 passive
```

## vMX-3

```text
set system host-name vMX-3
set system root-authentication plain-text-password
set protocols lldp interface all
set interfaces ge-0/0/0 unit 0 description "vMX-1"
set interfaces ge-0/0/0 unit 0 family inet address 10.42.13.3/24
set interfaces ge-0/0/1 unit 0 description "vMX-2"
set interfaces ge-0/0/1 unit 0 family inet address 10.42.23.3/24
set interfaces lo0 unit 0 family inet address 3.3.3.3/32

set protocols ospf area 0 interface ge-0/0/0.0
set protocols ospf area 0 interface ge-0/0/1.0
set protocols ospf area 0 interface lo0.0 passive
set routing-options router-id 33.33.33.33
```

## Verification

```text
show lldp neighbor
show interfaces terse
ping <addr> rapid
show ospf neighbor
show ospf interface brief
show route protocol ospf terse
show ospf overview
show ospf overview | match "Router ID"
show configuration interfaces
show configuration protocols ospf
show configuration routing-options router-id
show configuration system
```
