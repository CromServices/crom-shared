/**
 * Crom Services shared header for React / Next: crom-shared v1.
 * Same markup as header.js. Canonical v26 logo (L-035), one hosted URL per
 * scheme, swapped by system preference with <picture> (DARK-SCHEME-SPEC.md section 4).
 * Pass logoBase (a folder URL ending in "/") from ONE constant in the app to
 * move the logo host later; the default is Brand's files hosted in crom-shared.
 */
export const CROM_LOGO_BASE_DEFAULT = "https://cromservices.github.io/crom-shared/brand/logo/";
export const CROM_LOGO_INK_URL = CROM_LOGO_BASE_DEFAULT + "crom-logo-v26-ink.png";
export const CROM_LOGO_WHITE_URL = CROM_LOGO_BASE_DEFAULT + "crom-logo-v26-white.png";

type Props = { tag?: string; home?: string; logoBase?: string };

export function CromHeader({ tag, home = "https://cromservices.com.au/", logoBase = CROM_LOGO_BASE_DEFAULT }: Props) {
  const b = logoBase.endsWith("/") ? logoBase : logoBase + "/";
  return (
    <header className="crom-header">
      <div className="crom-header__inner">
        <a className="crom-brand" href={home} rel="noopener noreferrer" aria-label="Crom Services home">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcSet={b + "crom-logo-v26-white.png"} />
            <img className="crom-logo" src={b + "crom-logo-v26-ink.png"} width={526} height={481} alt="Crom Services" />
          </picture>
        </a>
        {tag ? <span className="crom-tag">{tag}</span> : null}
      </div>
    </header>
  );
}
