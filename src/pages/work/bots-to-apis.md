---
layout: ../../layouts/Story.astro
title: From brittle bots to APIs
kicker: Platform migration at AVRL
description: How we stopped breaking every time a partner redesigned a screen, by moving 550+ customer integrations from UI bots to direct APIs.
result: About 5x faster runs, no more breakages from screen changes, and nearly double the automations per server.
---

## Context

AVRL builds automations for US freight companies. Each one connects a customer to a Transportation Management System (TMS), the software where shippers post loads and carriers bid on them. When I took this on, most automations were UI bots: scripts that logged into the TMS and clicked through its screens like a person would.

## The problem

UI bots are only as stable as the screen they click. Whenever a TMS changed its interface, bots broke, customers' automations stopped until we fixed them, and the team spent its time repairing old builds instead of shipping new ones. Bots also ran on virtual machines, and each server could run only about three of them.

## The insight

More TMS platforms were opening APIs. An API is a contract: it doesn't change because someone redesigned a button. So the real question wasn't how to make bots tougher. It was which customers could stop needing bots at all.

## What I shipped

- **A migration path.** We started with a few early accounts on TMS platforms that already had APIs, proved it worked, then made API the default for every new build where the TMS supported it.
- **Two build types.** Outgoing builds, where we call the TMS API to fetch and process loads, and incoming builds, where we give the TMS an endpoint to call. Incoming builds need no server at all.
- **A faster pipeline.** Readiness checks so a build only enters development once credentials and logic are confirmed, and reusable templates for both API and UI builds. With a team of two engineers we now handle around 50 builds a month.
- **A roadmap from real signals.** Support tickets, feature requests and market changes, like a TMS newly opening an API, decide what gets built next.

## The result

- Automations run about **5x faster** per run.
- Breakages from screen changes are **gone** for API builds.
- Each server went from about **3 to 5–6 automations**, and incoming builds need no server, which cut hosting cost.
- The platform passed **550+ customer integrations**, and average build time halved from 10 days to 5.
