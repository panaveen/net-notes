---
title: 'Lab notebook: your first useful WLAN pcap'
description: 'A small capture workflow that teaches more than scrolling through Wireshark alone.'
pubDate: '2026-11-05'
tags: ["wlan", "labs"]
heroImage: '../../assets/blog-placeholder-3.jpg'
---

Packet captures feel intimidating until you give yourself a narrow question.

## Pick one question

Examples:

- Why did this client take 8 seconds to get on the network?
- Is the roam failing during 802.1X or DHCP?
- Are we seeing excessive retries before the “slowness” complaint?

## Capture with intent

1. Note time, SSID, AP/controller name, client MAC
2. Start capture **before** reproducing the issue
3. Keep the window short (30–120 seconds is often enough)
4. Filter early: `wlan.addr == aa:bb:cc:dd:ee:ff`

## Frames worth recognizing early

- **Beacon / Probe** — discovery
- **Auth / Assoc** — joining the BSS
- **EAPOL** — 802.1X / key handshake
- **DHCP** — often the silent delay after Wi‑Fi “looks connected”

## Write the conclusion

End every lab note with three lines:

1. What I expected  
2. What the pcap showed  
3. What I would change or test next  

That habit turns captures into CWNA (and later CWAP) muscle memory.
