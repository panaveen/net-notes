---
title: 'RF fundamentals for CWNA'
description: 'dBm, SNR, FSPL, and the few RF ideas you will reuse on every survey and ticket.'
pubDate: '2026-11-07'
tags: ["wlan"]
heroImage: '../../assets/rf-fundamentals.jpg'
---

CWNA starts with RF for a reason: every “Wi‑Fi problem” is eventually a signal, noise, or airtime problem.

## dBm without the fog

Received signal strength is reported in **dBm**. Remember:

- **0 dBm** = 1 mW
- Every **+3 dB** ≈ double the power
- Every **−3 dB** ≈ half the power
- Every **+10 dB** ≈ 10× the power

A client at **−67 dBm** is a common design target for data. Voice/video often wants stronger and cleaner signal than that.

## SNR is the real story

A strong RSSI with bad noise is still a bad link. **SNR** (signal-to-noise ratio) is what decides whether MCS rates stay high.

When troubleshooting:

1. Note RSSI **and** noise floor
2. Watch retries and data rates
3. Ask whether interference is raising the noise floor

## Free space path loss (intuition)

As distance grows, signal drops. You do not need to memorize every formula on day one, but you should know:

- Higher frequency → more path loss for the same distance (5/6 GHz falls off faster than 2.4 GHz)
- Walls, glass, and people add **attenuation** on top of free space loss

## Study prompt

Explain in one paragraph why a client can show “full bars” and still have a terrible experience. Hint: bars often track RSSI, not SNR, retries, or airtime.
