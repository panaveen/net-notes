---
title: 'Aruba Wi-Fi troubleshooting commands'
description: 'Controller CLI workflow: user-debug, client trail, auth trace, AP monitor, and AP inventory.'
pubDate: '2018-06-26'
tags: ['wlan', 'network', 'aruba', 'labs']
---


## 1. Enable client debug

Identify the affected client MAC, then:

```text
(config)# logging level debugging user-debug <mac>
```

## 2. Collect debug logs

Run your usual log collection after the client reproduces the issue.

## 3. Which AP is the client on?

```text
# show user-table | include <mac>
```

## 4. Client activity

```text
# show log user-debug all | include <mac>
# show auth-tracebuf | include <mac>
# show ap remote debug mgmt-frames ap-name <ap> | include <mac>
# show ap client trail-info <mac>
```

## 5. Interference / neighbors

```text
# show ap monitor ap-list ap-name <ap>
```

## 6. Packet-loss troubleshooting

Aruba’s client ping-loss guide: [Client Ping Loss troubleshooting](https://www.arubanetworks.com/techdocs/Troubleshooting/ArubaOS/Client_Ping_Loss/Web_Help_Index.htm).

## 7. AP uptime / serial / model

```text
# show ap database sort-by uptime
# show ap database group <group>
# show ap details advanced ap-name <ap> | include Serial
# show ap details advanced ap-name <ap>
```

## 8. AP debug

```text
# show ap debug system-status ap-name <ap>
# show ap debug counters ap-name <ap>
```

Handy reference sheet: [ArubaOS commands PDF (Semfio)](https://www.semfionetworks.com/uploads/2/9/8/3/29831147/arubaos_commands_-_reference_sheet_v1.2.pdf).
