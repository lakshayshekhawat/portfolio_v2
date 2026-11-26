---
layout: ../../layouts/Story.astro
title: One rating API instead of a custom build per shipper
kicker: Standardising incoming integrations at AVRL
description: Why we stopped building one-off quote integrations for every shipper's API, and replaced them with one standard rating API and, later, a Chrome extension on top.
result: 12 carriers rate loads through the standard API, 6 use the Chrome extension, and some carriers built their own middleware to adopt it.
tldr:
  - label: Problem
    text: Shippers with their own APIs each needed a custom quote integration, and none of that work carried over to the next customer.
  - label: My call
    text: One standard request and response, running each carrier's own rules and pricing engine. Customers adapt to us, not the other way round.
  - label: Result
    text: 12 carriers rate loads through it, some built middleware to adopt it, and 6 use a Chrome extension I drove when carriers asked for internal access.
---

## Context

AVRL's customers are freight carriers. Their shippers want a price for a load, ideally straight from the shipper's own system. That's an *incoming* integration: the shipper calls us and we return a rate, with no VM involved. (The opposite, outgoing model is in [the migration story](/work/bots-to-apis/).)

## The problem

We only offered incoming integrations for standard TMS platforms, the ones with one stable, well-documented API used by many customers. Everything else was a one-off.

Some shippers ran their own APIs, and each exposed a different set of fields. Some sent everything we needed; others left fields out. Every new request of this kind meant designing and maintaining a custom integration for one shipper, and none of that work carried over to the next customer. Saying yes to all of them would have turned a small team into a custom-integration shop.

## The insight

Underneath the different formats, every request asked the same question: here is a load, will you take it, and at what price? If we answered that question once, in one standard format, a new shipper would stop being a project and start being a configuration.

## Who did what

| | Role |
| --- | --- |
| **Me** | Proposed replacing per-shipper custom builds with one standard request and response, and later drove the Chrome extension when carriers asked for internal access |
| **Engineering** | Designed and built the API and the extension |
| **Carriers and their integrators** | Sent requests in the standard format, some by building their own middleware |

## How it works

As long as a request arrives in the standard structure, a rate comes back. Behind that one call, the API runs the carrier's own logic:

<figure class="flow" role="img" aria-label="How a load is rated: a load from the shipper's system goes through the carrier's bid or no-bid rules. If the carrier won't bid, the API returns a decline. If it will, the carrier's pricing engine and pricing adjustment rules set the rate, which is returned with its breakdown.">
  <div class="flow-step">Load from the shipper's system<span>one standard request</span></div>
  <div class="flow-arrow" aria-hidden="true"></div>
  <div class="flow-step flow-key">Bid or no-bid rules<span>the carrier's own rules</span></div>
  <div class="flow-arrow" aria-hidden="true"></div>
  <div class="flow-branches">
    <div class="flow-branch">
      <div class="flow-tag">Won't bid</div>
      <div class="flow-step">Decline<span>returned with the reason</span></div>
    </div>
    <div class="flow-branch">
      <div class="flow-tag">Will bid</div>
      <div class="flow-step">Carrier's pricing engine<span>called for the base rate</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">Pricing adjustment rules<span>premiums and discounts</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">Rate<span>with its breakdown</span></div>
    </div>
  </div>
  <figcaption>The carrier's rules are the same rule trees customers edit themselves in <a href="/work/self-service-rules/">the self-service rules tool</a>.</figcaption>
</figure>

## Key decisions and trade-offs

| Decision | Trade-off |
| --- | --- |
| One standard format instead of adapting to each shipper | We stopped bending to every shipper's API. The cost moved to the customer: some carriers had to build middleware to translate their shippers' requests. That they did it anyway was the clearest sign the product solved a real problem |
| Run the carrier's existing rules and pricing engine, not a new pricing model | Rates came from the carrier's own rules and pricing engine, so carriers could trust them. It also meant the API was only as good as each carrier's rules |
| Start with specific use cases, not a general platform | A narrow first version, widened only as real requests came in |
| Build the Chrome extension on the same API | When carriers asked to use the rates internally, their account managers got one-click rates without us maintaining a second pricing path |

## How the extension came about

The API started as a way for shippers' systems to get quotes. Then carriers asked whether their own teams could use it too, so account managers could check a rate for a load or lane without waiting on anyone. I drove a Chrome extension on top of the same API: a few clicks on the page they're already working in, and the rate comes back.

## Results

| Result | Type of evidence |
| --- | --- |
| 12 carriers rate loads through the API | Current count of live carriers |
| 6 carriers use the Chrome extension | Current count |
| Some carriers built their own middleware to adopt the standard format | Direct, from those carriers' integrations |
| New shipper requests no longer meant a new custom integration | Qualitative; I don't have a count of avoided builds |

## What I learned

- In B2B, standardising means saying no to some customization. That's only worth it if the standard covers the question every customer is really asking.
- Customers spending their own engineering time to adopt your API tells you more than any survey.
- Customers found a second use we hadn't planned: internal rate checks. Building it on the same API kept one source of truth for pricing.
