// Home page content. Edit text here; the page picks it up on the next build.

export const work = [
  {
    slug: 'bots-to-apis',
    title: 'From on-portal automations to APIs',
    story:
      "TMS portals started blocking our on-portal automations with CAPTCHAs and restrictions. I proposed moving to their APIs, rated every customer's automations for API readiness, and led the customer side of the migration while engineering built the integrations.",
    result: 'Automations moved wherever API was the only option or the customer chose it. A sample run got about 2x faster, with roughly 40–50% fewer VMs per automation.',
  },
  {
    slug: 'pricing-api',
    title: 'One rating API instead of a custom build per shipper',
    story:
      "Shippers with their own APIs each needed a custom quote integration. I proposed one standard rating API instead, then drove a Chrome extension when carriers wanted rates for their own teams.",
    result: '12 carriers use the API, 6 use the extension.',
  },
  {
    slug: 'self-service-rules',
    title: 'Letting customers change their own rules',
    story:
      'The same ticket kept coming back: please change my pricing rule. I proposed and designed a wizard so customers make those changes themselves, then drove adoption.',
    result: 'Rule-change tickets dropped 40%, and changes went from days to real time.',
  },
  {
    slug: 'support-on-zendesk',
    title: "Designing a support queue that's fair to every customer",
    story:
      "Tickets lived in shared inboxes, and a few heavy senders crowded out everyone else. I moved the org onto Zendesk and designed activation slots, so customers pick their own priorities and nobody can swamp the queue.",
    result: 'Customers see live ticket status, and every ticket has a clear owner.',
  },
];

export const building = [
  {
    title: 'Job-hunt copilot',
    what: 'Finds roles every morning, scores each against my resume, and tailors the resume for the best fits.',
    next: 'Working on: moving it off my laptop',
    repo: '',
  },
  {
    title: 'Training dashboard',
    what: 'Pulls Apple Health data into one view of my gym progress.',
    next: 'Working on: the data sync',
    repo: '',
  },
  {
    title: 'Ticket-to-LLM extension',
    what: 'A Chrome extension that copies a whole support-ticket thread so an LLM can draft the reply.',
    next: 'Working on: drafting replies to routine tickets',
    repo: '',
  },
];

// Swap each link for the Google Doc version once it's fixed.
export const prds = [
  { title: 'Community Wisdom', line: 'Slowing misinformation on social platforms', href: 'https://drive.google.com/file/d/1XHeLF7iWbJPJaGidGBS8IyCn-lSOrO6_/view' },
  { title: 'Pocket Paisa', line: 'Instant UPI credit with no credit history', href: 'https://drive.google.com/file/d/1Liu8GpBoiudxm7eNcb08hyukvk-yjx7W/view' },
  { title: 'Samooh', line: 'Community platform for small-town creators', href: 'https://drive.google.com/file/d/1dLjPoW7HAgY--XgeZfAHyhYjd_-Dua26/view' },
  { title: 'Happy Mind', line: 'Why mental-health apps struggle to convert', href: 'https://drive.google.com/file/d/15wBypBQxLTAY-cO-VQFUKKEytbGtafTu/view' },
  { title: '1% PM', line: 'A game that teaches product management', href: 'https://drive.google.com/file/d/1iIGQ0FUAFir7JMIH_LGAIWjqJtbutSSz/view' },
  { title: 'Shiksha-Shaala', line: 'Keeping learners in self-paced courses', href: 'https://drive.google.com/file/d/1mgjGyC1qJWgTr1YZ7CQjp10T_7Ifl7_P/view' },
];
