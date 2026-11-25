# Editing the site

| What | File |
| --- | --- |
| Name, hero line, email, phone, LinkedIn, GitHub, resume path | `src/data/site.js` |
| Work cards, "What I'm building now", PRD links | `src/data/content.js` |
| The four full Work stories (and their flow diagrams) | `src/pages/work/*.md` |
| "How I got here" paragraph | `src/pages/index.astro` |
| Colours and fonts | `src/styles/global.css` |
| Resume PDF | `public/Lakshay_Resume_Product_Manager.pdf` (keep the name, or update `site.js`) |
| Link-preview image | `public/og.png` |

## Deploy

Netlify reads `netlify.toml`: build command `npm run build`, publish folder `dist`.
Connect the GitHub repo to the existing allaboutlakshay site in Netlify and every push redeploys.
