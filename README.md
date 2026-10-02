# crom-shared · Crom Services

One shared source for the look, header, footer, credit and CI of every Crom Services sample.
Change something here, tag a release, and every sample that links it picks the change up.

Hosted on GitHub Pages: https://cromservices.github.io/crom-shared/

| Piece | Hosted URL / path | Use it for |
|---|---|---|
| `theme.css` | https://cromservices.github.io/crom-shared/theme.css | Colour, type and layout tokens plus header, card, button, chip and footer styles. Light by default; follows the visitor's system dark mode (`prefers-color-scheme`). Force one with `<html data-theme="light">` or `data-theme="dark"`. |
| `header.js` | https://cromservices.github.io/crom-shared/header.js | Renders the logo header into `<header data-crom-header data-tag="...">`. Uses the canonical logos https://cromservices.com.au/brand/logo/crom-logo-v26-ink.png (light) and `crom-logo-v26-white.png` (dark), swapped with `<picture>`. |
| `footer.js` | https://cromservices.github.io/crom-shared/footer.js | Renders "Crom Services · Australia", optional contact and the hosted "Built by Crom Services" credit into `[data-crom-footer]`. |
| `snippets/header.html`, `snippets/footer.html` | in this repo | No-JS copies of the header and footer markup. |
| `react/CromCredit.tsx`, `react/CromFooter.tsx`, `react/CromHeader.tsx` | in this repo | The same pieces for React and Next.js. |
| `README.template.md` | in this repo | The standard sample README, with the public-face checklist. |
| `snippets/README-footer.md` | in this repo | The standard README footer (credit follows GitHub light/dark). |
| reusable workflows | `.github/workflows/` (see below) | Shared CI and deploys. |

## Static HTML page

```html
<html lang="en-AU">
<head>
  <link rel="stylesheet" href="https://cromservices.github.io/crom-shared/theme.css">
  <script src="https://cromservices.github.io/crom-shared/header.js" defer></script>
  <script src="https://cromservices.github.io/crom-shared/footer.js" defer></script>
</head>
<body>
  <header data-crom-header data-tag="Sample · example project"></header>
  <main class="crom-shell"> ... </main>
  <div class="crom-shell">
    <footer data-crom-footer data-contact="on">
      <p><a href="../demos/">Optional page links stay above the standard line</a></p>
    </footer>
  </div>
</body>
</html>
```

### Footer attributes

| Attribute | Values | Default | Notes |
|---|---|---|---|
| `data-contact` | `on` / `off` | `off` | `on` adds `cromservices@gmail.com`. The packs page stays `off` (no email on /packs/). |
| `data-credit` | `auto` / `light` / `dark` | `auto` | `auto` picks the light or dark credit from the visitor's scheme (or `<html data-theme>`), and switches if they change it. `light` / `dark` force one: light on light footers, dark on dark footers. |
| `data-credit-show` | `off` | shown | Hide the credit. |

The credit markup is the hosted canonical snippet from the Crom credit spec, unchanged: images load from https://cromservices.com.au/brand/credit/.

### Header attributes

| Attribute | Default | Notes |
|---|---|---|
| `data-tag` | none | Pill text on the right, e.g. "Public demo · fixed-scope packs". |
| `data-home` | `https://cromservices.com.au/` | Where the logo links. |

## React / Next.js

Install from this repo, pinned to a tag:

```bash
npm install github:CromServices/crom-shared#v1.0.0
```

```tsx
// app/layout.tsx
import "crom-shared/theme.css";
// app/page.tsx
import { CromHeader, CromFooter } from "crom-shared/react";

<CromHeader tag="Next.js App Router · static export" />
...
<CromFooter contact />
```

Next.js needs `transpilePackages: ["crom-shared"]` in `next.config.ts` (the components ship as TSX).
`CromCredit` takes `variant="light" | "dark"`. It is the same component booking-demo uses (adopted unchanged from `booking-demo` `src/components/CromCredit.tsx` at 9ff8fa7). `CromFooter` defaults to `variant="auto"`, which renders both and lets `theme.css` show the right one.

## README footer and template

New sample: copy `README.template.md` to `README.md`, fill the `{{...}}` parts and run the public-face checklist at the top.
Existing README: paste `snippets/README-footer.md` unchanged as the footer.

## Reusable workflows (`workflow_call`)

Status: in v1.0.0 the four workflow files sit in `ci/workflows/`. They move to `.github/workflows/` in v1.1.0 (the `v1` tag moves with it); from then on call them with `@v1`:

| File | Inputs (default) | Secrets |
|---|---|---|
| `.github/workflows/node-ci.yml` | `node-version` ("20"), `working-directory` ("."), `build-script` ("build"), `test-script` ("test") | none |
| `.github/workflows/fly-deploy.yml` | `app` ("" = from fly.toml), `working-directory` ("."), `config` ("fly.toml") | `FLY_API_TOKEN` (optional: skips cleanly when unset) |
| `.github/workflows/pages-static.yml` | `path` (".") | none; caller grants `pages: write`, `id-token: write` |
| `.github/workflows/pages-build.yml` | `node-version` ("20"), `working-directory` ("."), `test-script` ("test"), `build-script` ("build"), `output-dir` ("dist"; use "out" for Next), `deploy` (true) | none; caller grants `pages: write`, `id-token: write` |

Example caller (`.github/workflows/ci.yml` in a sample repo):

```yaml
name: ci
on:
  push: { branches: [main] }
  pull_request:
jobs:
  test:
    uses: CromServices/crom-shared/.github/workflows/node-ci.yml@v1
  deploy:
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    needs: test
    uses: CromServices/crom-shared/.github/workflows/fly-deploy.yml@v1
    secrets: inherit
```

Pages for a new repo can be switched on without the Settings page:

```bash
gh api -X POST repos/CromServices/<repo>/pages -f build_type=workflow       # Actions-built site
gh api -X POST repos/CromServices/<repo>/pages -f 'source[branch]=main' -f 'source[path]=/'   # branch site
```

## Versions

- `v1.0.0`: an exact, frozen release. `v1`: moves to the newest 1.x release.
- The hosted Pages files always serve the newest `main`. If a breaking change ever comes (v2), the v1 files will be frozen under `/v1/` first, so pinned pages keep working.
- Light tokens are measured from the firm homepage; dark tokens are Brand's designed, AA-checked counterpart. Only colours change between schemes.

---

Crom Services · Australia · cromservices@gmail.com
Site: https://cromservices.com.au · Packs: https://cromservices.github.io/job-page-sample/packs/

<a href="https://cromservices.com.au"><picture><source media="(prefers-color-scheme: dark)" srcset="https://cromservices.com.au/brand/credit/crom-credit-lockup-dark@2x.png"><img src="https://cromservices.com.au/brand/credit/crom-credit-lockup-light@2x.png" width="175" height="20" alt="Built by Crom Services"></picture></a>

MIT, see LICENSE.
