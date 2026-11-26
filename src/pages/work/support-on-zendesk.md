---
layout: ../../layouts/Story.astro
title: Designing a support queue that's fair to every customer
kicker: Support operations at AVRL
description: Moving the whole organisation from shared Gmail inboxes to Zendesk, and designing the rules that decide which work gets done first.
result: Every ticket tracked with a clear owner, live status for customers, and no single customer able to swamp the team.
tldr:
  - label: Problem
    text: Requests lived in shared inboxes, customers couldn't see their status, and a few heavy senders crowded out everyone else.
  - label: My call
    text: Move the whole org to Zendesk with type-based routing, and give each customer activation slots so they choose their own priorities.
  - label: Result
    text: Live ticket status for customers, a clear owner for every ticket, and no single customer able to swamp the team.
---

## Context

Customer tickets and build requests arrived by email in shared Gmail inboxes. Project coordinators owned them: for each request they created an item on that customer's Monday.com board by hand and assigned engineers. I had run support on Zendesk at Flyhomes, so I knew what a proper ticketing setup could do.

## The problem

Requests weren't getting lost, but nothing was organised, and that hurt in three ways:

- **Customers were blind.** Once they sent a request, they couldn't see what was happening with it.
- **Coordinators did the sorting by hand.** They tracked every open request across a busy inbox and separated build requests from logic updates before anything reached an engineer.
- **The queue wasn't fair.** With no limit on requests, a few customers sent far more than everyone else. Their tickets crowded out the rest and overloaded the team.

The first two are tooling problems. The third is a product problem: deciding whose work gets done first.

## Who did what

| | Role |
| --- | --- |
| **Me** | Led the move from Gmail to Zendesk end to end and configured it myself: ticket types and tags, routing, team groups, views, canned replies and the Monday.com link. Designed the activation-slot system |
| **Ticketing team** | A dedicated team, set up around the new flow, that reviews and classifies every ticket |
| **Product Owners** | Set the checklist each build must pass, and coordinate the engineers once a ticket reaches their team |
| **Operations associates** | Work through the Product Owners' checklist before a build starts |

## Key decisions and trade-offs

| Decision | Trade-off |
| --- | --- |
| **Activation slots** (my idea): customers can raise unlimited tickets, but work starts only on ones they activate. Three slots per ticket type, plus one priority slot per type | Customers can't get everything worked at once. In return, they choose their own priorities, and heavy senders can no longer push everyone else back. The priority slot keeps a real emergency from waiting behind a full queue |
| A ticketing team classifies every ticket, instead of customers choosing a category | One more step before work starts, but tickets reach the right team first time |
| A checklist gate before any build starts | Builds start a little later, but only once credentials and logic are confirmed, instead of stalling halfway |
| Zendesk creates the Monday.com work item automatically | Coordinators stopped copying requests across by hand |

<figure class="flow" role="img" aria-label="How a ticket moves: a customer request arrives in Zendesk, the customer activates it in one of their slots, the ticketing team reviews and classifies it, then a new build goes to an operations associate for a checklist and on to the Product Owner and engineers, while a logic update, change or reported issue is investigated by the ticketing team and sent to the owning team's Product Owner and engineers.">
  <div class="flow-step">Customer request<span>arrives in Zendesk</span></div>
  <div class="flow-arrow" aria-hidden="true"></div>
  <div class="flow-step">Customer activates it<span>three slots per type, plus one priority slot</span></div>
  <div class="flow-arrow" aria-hidden="true"></div>
  <div class="flow-step flow-key">Ticketing team<span>reviews and classifies</span></div>
  <div class="flow-arrow" aria-hidden="true"></div>
  <div class="flow-branches">
    <div class="flow-branch">
      <div class="flow-tag">New build</div>
      <div class="flow-step">Operations associate<span>works through the PO checklist</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">Product Owner and engineers<span>build starts once every point is met</span></div>
    </div>
    <div class="flow-branch">
      <div class="flow-tag">Logic update, change or reported issue</div>
      <div class="flow-step">Ticketing team investigates<span>which team, and what needs to change</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-step">Owning team's Product Owner and engineers<span>work on a clear ask</span></div>
    </div>
  </div>
  <figcaption>Every ticket also becomes a Monday.com work item, tracked against the company's 24-hour customer update SLA.</figcaption>
</figure>

## The result

These are process outcomes. I didn't measure them as numbers, so I describe them rather than quantify them.

- Customers see the live status of every ticket they've raised.
- The company's 24-hour customer update SLA is now tracked on every ticket in one place.
- A few heavy senders no longer crowd out everyone else.
- Every ticket sits in one place, with a clear owner at each stage.
- The checklist gate is one of the readiness checks that helped halve build time from 10 days to 5, alongside reusable build templates and [the self-service rules tool](/work/self-service-rules/).

## What I learned

- A queue is a product. Who gets served first is a design decision, and leaving it undecided means the loudest customer decides.
- Giving customers a choice about priority works better than making the choice for them.
