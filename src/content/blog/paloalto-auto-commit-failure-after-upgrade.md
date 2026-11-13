---
title: 'Palo Alto: auto-commit failure after upgrade'
description: 'AutoCom jobs failing with P1-abort after a PAN-OS upgrade — content preview merge error and the fix.'
pubDate: '2021-01-19'
tags: ['security', 'network', 'paloalto']
---


## Issue

Auto-commit kept failing after a Palo Alto upgrade.

```text
admin@paloalto> show jobs all

Enqueued            Dequeued            ID  Type     Status  Result  Completed
--------------------------------------------------------------------------
2021/01/12 02:40:25 02:40:25             2  AutoCom  FIN     FAIL    02:40:39
2021/01/12 02:37:30 02:37:30             1  AutoCom  FIN     FAIL    02:37:43
```

```text
admin@paloalto> show management-clients

Client         PRI  State      Progress
-----------------------------------------
routed          30  P1-abort   0
ha_agent        25  P1-abort   0
device          20  P1-abort   0
useridd        10  P1-abort   0 *
...

Overall status: P1-abort. Progress: 0
Errors:
useridd: Management server failed to send phase 1 to client useridd
```

## Root cause (from mp logs)

```text
Error: _pan_merge_content_preview_pre_commit(...):
Merging content preview - Could not find content preview application node.
```

Often tied to a corrupt / incomplete content database after upgrade. See also the [Palo Alto Live Community discussion](https://live.paloaltonetworks.com/t5/general-topics/can-t-do-a-commit-auto-commit-failing/td-p/121977).

## Solution

```text
> request content upgrade download latest
> configure
# commit force
```

After content download + `commit force`, auto-commit recovered.
