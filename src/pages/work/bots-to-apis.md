---
layout: ../../layouts/Story.astro
title: From on-portal automations to APIs
kicker: Flagship project · Platform migration at AVRL
description: How I took a live B2B automation platform off fragile on-portal automations and onto TMS APIs, one customer at a time, without breaking anyone's bidding logic.
result: On-portal automations moved to APIs wherever API was the only option or the customer chose it. A sample run got about 2x faster, with roughly 40–50% fewer VMs per automation. The platform now runs 550+ live API automations.
tldr:
  - label: Problem
    text: TMS portals started blocking our on-portal automations with CAPTCHAs. Customers on those platforms were about to lose their automations, and the business they brought in.
  - label: My call
    text: I checked what each TMS offered instead, proposed moving to their APIs, and rated every automation for API readiness before asking any customer to move.
  - label: Result
    text: Automations moved wherever API was the only option or the customer chose it. Runs got about 2x faster, each VM carries 5–6 automations instead of about 3, and API Automations now serves about 50 customers across 12 TMSs on outgoing API and 8 on incoming.
---

## Context

AVRL automates bidding for US freight carriers. Each automation connects a carrier to the Transportation Management System (TMS) where shippers post loads, then bids using the carrier's own rules. Most automations ran on-portal: scripts that logged into a TMS portal and clicked through it like a person would. They broke whenever a portal changed its screens, and every fix needed an engineer.

## The problem, and how I found the way out

TMS providers started pushing back: CAPTCHAs, restrictions on automated activity, some blocking automated access outright. On those platforms, customers had no way to keep their automations running, and a carrier without its automation can lose a lot of business.

When the blocking started, I looked at what each TMS offered instead. Several had launched APIs and were asking customers to use them. I proposed that we move to those APIs, and the CTO approved it.

## Who did what

| | Role in the migration |
| --- | --- |
| **Me** | Proposed the move, built the readiness framework, set the order customers were approached in, ran every customer and TMS-vendor conversation, decided on minor workarounds, and monitored automations after go-live |
| **Engineering** | Built the API integrations and the workarounds we agreed |
| **CTO** | Approved the migration and decided anything that changed the product for everyone |
| **Customers and TMS vendors** | Granted API access, shared documentation and agreed changes to the customer's logic |

## Check readiness before asking anyone to move

Before contacting a customer, I compared their automation logic with what the TMS API could actually return:

| Readiness | What it meant | What we did |
| --- | --- | --- |
| Fully compatible | The API supported the existing logic as it was | Migrate |
| Partially compatible | Some requirements needed a different field, a workaround or a logic change | Agree the changes with the customer, then migrate |
| Not compatible | Required functionality wasn't available through the API | Keep it on-portal for now, where the TMS still allowed it |

TMSs that were blocking automations came first, because those customers would lose their automations otherwise. Within that, high-volume customers went first: they had the most to gain, and they exposed API gaps early enough to fix them for everyone else.

## When the API fell short

APIs rarely returned everything the portal showed. For each gap I worked through four options with the customer, the TMS vendor and engineering:

| Option | When I chose it |
| --- | --- |
| Another field or a workaround | An API field could stand in for the missing one. I shared real API responses with the customer to confirm it did the job. Minor workarounds were my call |
| Change the customer's logic | The customer could get the same outcome with a different rule, and agreed to it |
| Keep it on-portal | Nothing in the API could replace a field the logic depended on, and the TMS still allowed on-portal automation |
| Escalate a product change | The gap affected many customers, not one. These went to the CTO |

## Trade-offs I had to weigh

- **API access wasn't always free.** Some TMS vendors charged for it. High-volume customers gained the most; for smaller ones, staying on-portal (where allowed) or bidding manually through an account manager could make more sense.
- **Not every new build should be an API.** Where a TMS only allows API, new builds use it. Where both still work, the customer chooses between API and on-portal.
- **Most carriers had never used an API.** I joined their calls and emails with TMS vendors and got credentials in place before engineering started, so engineering time went on building, not chasing access.

<figure class="flow">
  <div class="flow-branches">
    <div class="flow-branch">
      <div class="flow-tag">Outgoing API: this migration</div>
      <div class="flow-step">Our automation<span>runs on a hosted VM</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">TMS API<span>returns the loads</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">Automation decides and bids<span>using the customer's logic</span></div>
    </div>
    <div class="flow-branch">
      <div class="flow-tag flow-tag-muted">Incoming API: instant quoting</div>
      <div class="flow-step">Shipper's system<span>sends a load</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">Our endpoint<span>no VM needed</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">Quote returned<span>in the same call</span></div>
    </div>
  </div>
  <figcaption>Results on this page are for the outgoing model. The incoming model is in <a href="/work/pricing-api/">the rating API story</a>.</figcaption>
</figure>

## Results

| What changed | Before | After | Type of evidence |
| --- | --- | --- | --- |
| Customers on TMSs that blocked on-portal automation | About to lose their automations | Kept automating through the API | Direct: the bot route was closed |
| A sample 20-load run | About 10 minutes | 4–5 minutes, about 2x faster | Timed on a sample run; individual automations vary |
| Automations per VM | About 3 | 5–6 | Observed VM capacity |
| VMs needed per automation | | Roughly 40–50% fewer | Derived from the capacity change, on the same VM type |
| Breakages from portal screen changes | Frequent, each needing an engineer | None on API automations | Follows from the design: no screens involved |
| Which automations moved | | Every one where API was the only option or the customer chose API access | Tracked during the migration; no formal percentage of the total |
| Automation failures and maintenance tickets | | Dropped significantly | Observed in the support queue; not measured as a percentage |
| Live API automations | | 550+ across about 50 customers | Platform count. About 50–100 were migrated; the rest were new API builds |

## What I learned

- An API migration is as much about customer economics and readiness as about code.
- Find the API gaps before the migration starts, not halfway through.
