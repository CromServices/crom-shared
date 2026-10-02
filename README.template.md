<!--
Crom Services README template (crom-shared v1).
Copy into a new sample repo as README.md, fill every {{...}}, delete these comments.
Public-face checklist (tick before you merge):
  [ ] Firm face is "Crom Services" only. No personal names, no bot or AI-assistant names.
  [ ] Location reads "Australia". No city, no street address, no ABN.
  [ ] No internal pricing notes, board or bidding tactics, or rate talk.
  [ ] No client names unless the client has agreed; fictional businesses say so.
  [ ] No secrets or tokens (published demo values only, labelled as such).
  [ ] Footer block below is unchanged (it comes from crom-shared).
  [ ] Pages-hosted sample links https://cromservices.github.io/crom-shared/theme.css.
-->
# {{Title}} · Crom Services

## What it is

{{One or two plain sentences: what this sample is and who it is for. Say "sample only, not a client system" if true.}}

## What it proves

- {{Job type this proves, e.g. "one HMAC-verified webhook endpoint"}}
- {{Second job type}}

Does not prove: {{what it is not, e.g. "payment flows"}}.

## Live link

{{https://cromservices.github.io/<repo>/ or "No hosted demo (code sample)"}}

## Run in 3 commands

```bash
npm ci
npm test
npm run dev        # or: npm start
```

Deploy: push to `main` (CI runs the shared crom-shared workflow) or `npm run deploy`.

## Reuse for a new job

1. {{Which config or content file to edit (e.g. `site.config.ts`, `docs/index.html`)}}
2. {{What to rename (app name in `fly.toml`, `basePath`)}}
3. Push to `main`; the shared workflow deploys it.

## Footer

---

Crom Services · Australia · cromservices@gmail.com
Site: https://cromservices.com.au · Packs: https://cromservices.github.io/job-page-sample/packs/

<a href="https://cromservices.com.au"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cromservices.com.au/brand/credit/crom-credit-lockup-dark@2x.png"><img src="https://cromservices.com.au/brand/credit/crom-credit-lockup-light@2x.png" width="175" height="20" alt="Built by Crom Services"></picture></a>

MIT, see LICENSE.
