---
title: 'Site-to-site VPN between Palo Alto and Cisco vASA'
description: 'IKE Phase 1 failure fixed by correcting Local/Peer Identification on the Palo Alto IKE gateway.'
pubDate: '2021-01-19'
tags: ['security', 'network', 'paloalto', 'cisco']
---


## Initial problem

VPN failed in **IKE Phase 1** between Cisco vASA and Palo Alto.

The IKE gateway was initially configured with the peer as the tunnel endpoint **public** IP address.

## Fix

Update Palo Alto **IKE Gateway** identification:

| Field | Value |
|-------|--------|
| **Local Identification** | Actual tunnel endpoint — **public** IP |
| **Peer Identification** | **Private** IP used by the vASA for IKE negotiation |

After that change, the tunnel came up.

## Useful Palo Alto checks

```text
show vpn flow name <tunnel-name>
less mp-log ikemgr.log
```

GUI: **Monitor → System**
