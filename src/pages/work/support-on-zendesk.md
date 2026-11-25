---
layout: ../../layouts/Story.astro
title: Moving support out of Gmail
kicker: Operations at AVRL
description: Turning a shared inbox into a ticketing pipeline, so every request reached the right team and every customer could see where it stood.
result: Every ticket tracked from first email to close, a fair share of the team for every customer, and an update at least every 24 hours.
---

## Context

Customer tickets and build requests came in by email to shared Gmail inboxes. Project coordinators owned them: for each request they created an item on that customer's Monday.com board by hand and assigned engineers. I had run support on Zendesk at Flyhomes, so I knew what a proper ticketing setup could do.

## The problem

Requests weren't getting lost, but nothing was organised. Once customers sent a request, they couldn't see what was happening with it. Coordinators had to track every open request across a busy inbox and sort build requests from logic updates by hand before anything reached an engineer. And with no limit on requests, a few customers sent far more than the rest, which slowed everyone else's tickets and overloaded the team.

## What I shipped

- **The move to Zendesk, designed for routing.** I led the switch from Gmail and set Zendesk up myself: tags that classify each ticket and decide where it lands on the Monday.com board, a team in Zendesk for each group with the right people in it, and saved views and canned replies for the most common requests.
- **A dedicated ticketing team.** We restructured around the new flow. One team reviews every ticket as it arrives and classifies it, for example as a new build, a logic update, an automation change, an error, a spec issue, a third-party issue or a product update.
- **Routing by type.** Once classified, each ticket goes straight to the team that owns it, where the Product Owner coordinates the engineers.
- **Checkpoints at each stage.** Each type of ticket has its own checks before work starts. A new build, for example, goes from the ticketing team to an operations associate, who works through a checklist set by the Product Owners. It only moves on once every point is met. If something's missing, the Product Owner works with the customer to close the gap.
- **Activation slots to keep the queue fair.** This was my idea. Customers can raise as many tickets as they like, but work starts only on the ones they activate, through a ticket-activation interface we gave them. Each customer gets three slots per ticket type (builds, issues, logic updates and information requests), plus one priority slot per type that goes in even when the regular slots are full. Customers decide what matters most to them, and no single customer can swamp the team.
- **Zendesk wired to Monday.com.** Tickets create work items automatically, so coordinators stopped copying requests across by hand.
- **A 24-hour response rule.** Every open ticket gets an update at least once every 24 hours saying what's being worked on.

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
  <figcaption>Every ticket also becomes a Monday.com work item, and the customer gets an update at least every 24 hours.</figcaption>
</figure>

## The result

- Customers see the live status of every ticket they've raised.
- No ticket goes more than 24 hours without an update.
- A few heavy senders no longer crowd out everyone else, and the team is no longer overloaded.
- Internal teams track every ticket in one place, with a clear owner at each stage.
