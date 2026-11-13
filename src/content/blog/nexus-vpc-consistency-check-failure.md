---
title: 'Nexus vPC consistency-check failure'
description: 'N3K peers with failed global/Type-2 consistency — TLV corruption cleared by reload + ASCII reload.'
pubDate: '2018-11-25'
tags: ['network', 'cisco', 'labs']
---


Consistency check failed for two reasons:

1. Configuration inconsistency  
2. Type-2 (QoSMgr QoS configuration incompatible)

## Primary (N3K1)

```text
N3K1# sh vpc
vPC domain id                     : 1
Peer status                       : peer adjacency formed ok
vPC keep-alive status             : peer is alive
Configuration consistency status  : failed
Per-vlan consistency status       : failed
Configuration inconsistency reason: TLV Utils invalid arg passed in api
Type-2 consistency status         : failed
Type-2 inconsistency reason       : QoSMgr Qos configuration incompatible
vPC role                          : primary
...
vPC status
Id  Port   Status  Consistency  Reason                Active vlans
1   Po1    up      failed       Global compat check   500,519,599
2   Po2    up      failed       Global compat check   500,519,599
```

## Secondary (N3K2)

```text
N3K2# sh vpc
Configuration consistency status  : failed
Per-vlan consistency status       : success
Configuration inconsistency reason: TLV Utils invalid arg passed in api
Type-2 consistency status         : success
vPC role                          : secondary
...
Id  Port   Status  Consistency  Reason                Active vlans
1   Po1    down*   failed       Global compat check   -
2   Po2    down*   failed       Global compat check   -
```

## Actions taken

1. Internal storage corruption — debug showed Type-1 global compat unable to get local TLV:
   ```text
   nve_mgr_mcecm_type1_glbl_cfg_compat_check: unable to get local tlv
   ```
2. Compared config on N3K-01 and N3K-02 — configs matched  
3. Reloaded both N3Ks one by one → cleared the TLV inconsistency  
4. Reloaded N3K-01 with the **ASCII** option → cleared the QoSMgr inconsistency
