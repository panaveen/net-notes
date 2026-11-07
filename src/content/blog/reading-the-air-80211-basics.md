---
title: 'Reading the air: 802.11 basics'
description: 'Channels, channel width, and why wider is not always faster on a busy floor.'
pubDate: '2026-11-06'
tags: ["wlan"]
heroImage: '../../assets/blog-placeholder-2.jpg'
---

802.11 is a shared medium. That single fact explains more production issues than any vendor GUI.

## Channels and width

- **2.4 GHz** has few clean channels; overlapping BSS is common
- **5 GHz / 6 GHz** give more room, but DFS and device support still matter
- **40/80/160 MHz** can raise peak throughput — and raise contention + sensitivity to interference

Design choice is not “widest available.” It is “widest that still leaves clean spectrum for neighbors and roaming.”

## Airtime is the currency

A slow client (low MCS, legacy rates, distant AP) consumes disproportionate airtime. One bad client can make a cell feel broken for everyone.

Look for:

- Low data rates stuck for long periods
- High retry percentages
- Sticky roaming to a far AP

## Association vs. experience

Associated ≠ healthy. Always separate:

1. Can the client join (SSID, auth, DHCP)?
2. Can it sustain useful MCS with acceptable latency/loss?

## Lab idea

Pick one SSID. Capture for two minutes near the AP, then at the cell edge. Compare average data rates and retries. That gap is the story of your coverage design.
