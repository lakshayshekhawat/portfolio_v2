---
layout: ../../layouts/Story.astro
title: Letting customers change their own rules
kicker: Self-service product at AVRL
description: Turning one of the most frequent support tickets into a wizard customers use themselves.
result: Rule-change tickets dropped 40%, and rule changes went from days to real time.
tldr:
  - label: Problem
    text: Every bidding or pricing rule change was a support ticket that took days, while customers bid on stale rules.
  - label: My call
    text: Let customers make the change themselves through a guided wizard, and treat adoption as part of the launch.
  - label: Result
    text: Rule-change tickets dropped 40%, and changes went from days to real time.
---

## Context

Each customer's automations bid on loads using business rules: which lanes to take, whether to bid at all, and how to adjust the price. These rules change often, with the market, the season or the customer's own capacity. The same rules also drive [the rating API](/work/pricing-api/).

## The problem

Every rule change was a support ticket. A customer wrote in, someone on our team translated the request into the automation's decision-tree logic, tested it and shipped it. That took days. For the customer, it meant bidding on stale rules in the meantime. For us, it meant engineers and coordinators spending their time on routine edits instead of new builds.

## The insight

Looking across the ticket queue, I saw bidding and pricing rule changes coming up again and again. The customers already knew exactly what they wanted. The only thing between them and the change was a decision tree that only our team could safely edit.

## Who did what

| | Role |
| --- | --- |
| **Me** | Spotted the ticket pattern, proposed self-service, designed the wizard, prioritised and coordinated the build through testing and launch, and drove customer adoption |
| **Engineering** | Built the wizard and connected it to the automations' rule logic |
| **Customers** | Moved from raising tickets to making their own changes |

## Key decisions

| Decision | Why |
| --- | --- |
| A guided, plain-English wizard instead of letting customers edit decision trees directly | Customers know their business rules, not our logic format. The wizard turns their answers into the tree, so an edit can't break the structure |
| Changes take effect straight away | The whole point was removing the wait; a change that sat in a queue would just be a slower ticket |
| Treat adoption as part of the launch | A self-service tool nobody uses doesn't remove a single ticket, so I onboarded customers onto it rather than just announcing it |

## The result

| Result | Type of evidence |
| --- | --- |
| Rule-change tickets dropped 40% | Measured on rule-change ticket volume after launch |
| Rule changes went from days to real time | Change of process: customers now apply changes themselves |
| Build time halved, from 10 days to 5 | Measured. The wizard was one of three changes behind this, alongside readiness checks at each hand-off and reusable build templates |

**Context, not a claim:** at the time, this was the only product AVRL's customers used, and I owned it. Over that year, customer retention rose from 70% to 90%. The rules wizard, structured customer feedback loops and [the new support process](/work/support-on-zendesk/) all happened in that period, and nobody isolated how much each one contributed, so I present retention as an outcome for the product I owned, not as a result of this one feature.

## What I learned

- The support queue is a product backlog in disguise. A ticket that keeps coming back is a feature request.
- Self-service is only a win if customers actually use it. Adoption is part of the product, not something that happens after launch.
