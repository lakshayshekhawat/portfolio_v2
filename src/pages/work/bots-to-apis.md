---
layout: ../../layouts/Story.astro
title: From UI bots to API-based automations
kicker: Platform migration at AVRL
description: How we moved a live B2B automation platform off fragile portal bots and onto TMS APIs, one customer at a time.
result: Almost all customers migrated, a representative run about 2x faster, no more breakages from screen changes, and 5–6 automations per server instead of 3.
---

## Context

AVRL automates bidding for US freight carriers. Each automation connects a carrier to the Transportation Management System (TMS) where shippers post loads. When I took this on, most automations were UI bots: scripts that logged into a TMS portal and clicked through it like a person would.

## The problem

TMS providers started to push back. Several added CAPTCHAs, restricted automated activity or blocked bots outright, and some launched their own APIs and asked customers to use them instead. For some platforms, moving to APIs was now mandatory. For others it was an economic and operational choice.

The bots had other costs too:

- They broke whenever a portal changed its screens, and every fix needed an engineer.
- A broken automation could mean a missed bid for the customer.
- Large runs could take more than 30 minutes.
- Customers needed automations that ran reliably around the clock.

## My role

I proposed the move to APIs to our CTO, who approved it. I then drove the customer side of the migration, from first assessment to monitoring after go-live. Our engineers built the integrations; my job was making sure each migration was feasible, agreed and delivered.

I was responsible for:

- reviewing each customer's existing automations and business logic
- assessing whether the TMS API could support them
- deciding the order customers were approached in
- explaining the benefits, limits and costs to customers
- coordinating API access between customers and TMS providers
- working with engineers to close API gaps
- approving minor customer-specific workarounds, and escalating product-level changes to the CTO
- tracking progress, and monitoring automations after migration

## Approach: check readiness before asking anyone to move

Before contacting a customer, I reviewed their automation logic against what the TMS API could actually return, and sorted each automation into one of three groups:

| Readiness | What it meant | What we did |
| --- | --- | --- |
| Fully compatible | The API supported the existing logic as it was | Migrate |
| Partially compatible | Some requirements needed different fields, a workaround or a change to the logic | Agree the changes with the customer first, then migrate |
| Not compatible | Required functionality wasn't available through the API | Keep the UI bot for now, where the TMS still allowed it |

That meant every conversation started with facts: what would keep working, what would change and what couldn't move yet. We approached high-volume customers first, because they had the most to gain and showed us the gaps earliest.

## Two kinds of API integration

The migration used one model. The other came later, as a separate product.

<figure class="flow">
  <div class="flow-branches">
    <div class="flow-branch">
      <div class="flow-tag">Outgoing API: this migration</div>
      <div class="flow-step">Our automation<span>runs on the customer's server</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">TMS API<span>returns the loads</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">Automation decides and bids<span>using the customer's logic</span></div>
    </div>
    <div class="flow-branch">
      <div class="flow-tag flow-tag-muted">Incoming API: instant quoting</div>
      <div class="flow-step">Shipper's TMS<span>sends a load</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">AVRL endpoint<span>no customer server needed</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">Quote returned<span>in the same call</span></div>
    </div>
  </div>
  <figcaption>Results on this page are for the outgoing model. The incoming model is in <a href="/work/pricing-api/">the rating API story</a>.</figcaption>
</figure>

## Key decisions and trade-offs

| Decision | Why | Who decided |
| --- | --- | --- |
| Move from UI bots to APIs | Portal restrictions made bots unsustainable on some platforms | I proposed it; the CTO approved it |
| Start with platforms that were restricting bots | Those customers would lose their automations otherwise | I set the order |
| Approach high-volume customers first | The most benefit, and the earliest view of API gaps | I set the order |
| Check compatibility before any customer outreach | No surprises after a customer had committed | My readiness framework |
| Weigh API access fees against each customer's volume | For low-volume customers, the fee could outweigh the benefit | Agreed with each customer |
| Keep UI bots where APIs fell short | A partial migration was better than a broken one | Case by case, with engineering |
| Approve small workarounds; escalate bigger changes | Fast for customer-specific fixes, careful for anything product-wide | Minor ones: me. Product-level: the CTO |

## What made this difficult

- **Most carriers had never used an API.** I acted as the go-between with their TMS providers: explaining what API access meant, joining their emails and onboarding calls, and getting credentials in place before engineering started.
- **Access depended on third parties.** Every migration waited on a TMS provider granting access and sharing documentation.
- **APIs didn't return everything the portals showed.** Where a field was missing, I asked the TMS to expose it, shared real API responses with the customer to see whether another field could do the job, and worked through workarounds with engineering.
- **Every customer's logic was different.** A change that worked for one could break another's rules, so each workaround was checked against that customer's existing logic first.
- **The cheaper option wasn't always the API.** Some TMS providers charged for API access. Higher-volume customers gained the most; for smaller ones, staying on bots (where allowed) or bidding manually through an account manager could make more sense.

## Results

| What changed | Before | After | How we know |
| --- | --- | --- | --- |
| A representative 20-load run | About 10 minutes | 4–5 minutes, about 2x faster | Timed on an example run; individual automations vary |
| Automations per server | About 3 | 5–6 | Server capacity before and after |
| Breakages from screen changes | Frequent, each needing an engineer | None on API automations | Support queue after migration |
| Customers migrated | | Almost all | Tracked through the migration |

Maintenance tickets dropped too, and more of them became questions about configuring logic rather than fixing broken bots. Customers got more dependable round-the-clock runs.

## What I learned

- An API migration isn't just a technical swap. It involves customer economics and operational readiness as much as code.
- You have to understand a customer's existing workflow before you change what sits underneath it.
- API coverage gaps need finding before a migration starts, not halfway through.
- The technically better option isn't automatically the economical one for every customer.
- Monitoring after migration is part of the migration, not an optional extra.
