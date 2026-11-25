---
layout: ../../layouts/Story.astro
title: One rating API for every shipper and TMS
kicker: 0-to-1 product at AVRL
description: Replacing custom, per-TMS quoting builds with one real-time rating API, then putting it one click away in a Chrome extension.
result: 12 carriers rate loads through the API, 6 use the extension, and some built their own middleware to adopt it.
---

## Context

AVRL's customers are carriers and freight brokers. Their shippers want a price for a load in real time, usually straight from the shipper's Transportation Management System (TMS). Each carrier has its own logic for which loads to take and how to price them.

## The problem

Every quote connection was a custom build. Each TMS and each shipper asked for rates in its own format, with its own fields and edge cases, so connecting one more shipper to a carrier meant building and maintaining one more one-off integration. None of that work carried over to the next customer.

## The insight

Underneath the different formats, every request asked the same question: here is a load, will you take it, and at what price? If we answered that question once, in one standard format, the integration stopped being a project and became a product.

## What I shipped

- **A standard real-time rating API.** One request format any shipper or TMS can call. A load goes in, and a rate or a clear no-bid decision comes back, usually within a few seconds.
- **The carrier's own logic, every time.** Each request runs through three stages: the carrier's bid or no-bid rules, a pricing engine that sets the base rate, fuel surcharge and distance from market data, and the carrier's own adjustments for premiums and discounts.
- **A rate you can audit.** Every rate comes back with its breakdown and a step-by-step trace of how it was built, so nobody has to guess why a price came out the way it did.
- **A clean path to production.** Each carrier's logic is captured in an intake first. Integrators then test with their own credentials and move to production on an agreed date, secured with standard OAuth 2.0.
- **A Chrome extension on top.** Built on the rating API, it lets carrier teams get a rate for a load or lane in one click, without leaving the page they're working in.

<figure class="flow" role="img" aria-label="How a load is rated: a load from the shipper's TMS goes through the carrier's bid or no-bid rules. If the carrier won't bid, the API returns a decline with the reason. If it will, a pricing engine sets the base rate, fuel and distance, the carrier's adjustments add premiums and discounts, and the API returns the rate with its full breakdown.">
  <div class="flow-step">Load from the shipper's TMS<span>one standard request</span></div>
  <div class="flow-arrow" aria-hidden="true"></div>
  <div class="flow-step flow-key">Bid or no-bid rules<span>the carrier's own logic</span></div>
  <div class="flow-arrow" aria-hidden="true"></div>
  <div class="flow-branches">
    <div class="flow-branch">
      <div class="flow-tag">Won't bid</div>
      <div class="flow-step">Decline<span>returned with the reason</span></div>
    </div>
    <div class="flow-branch">
      <div class="flow-tag">Will bid</div>
      <div class="flow-step">Pricing engine<span>base rate, fuel and distance from market data</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">Carrier's adjustments<span>premiums and discounts</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">Rate<span>with its full breakdown</span></div>
    </div>
  </div>
  <figcaption>The same flow serves every shipper and TMS, and the Chrome extension calls it too.</figcaption>
</figure>

## The result

- **12 carriers** rate loads through the API.
- **6 carriers** use the Chrome extension.
- Some carriers built their own middleware to translate their shippers' requests into our format. Customers putting in their own engineering time is the clearest sign a B2B API solves a real problem.
