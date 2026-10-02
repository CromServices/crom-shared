/**
 * Crom Services shared header for React / Next: crom-shared v1.
 * Same markup as header.js. Canonical v26 logo (L-035), one hosted URL per
 * scheme, swapped by system preference with <picture> (DARK-SCHEME-SPEC.md section 4).
 */
export const CROM_LOGO_INK_URL = "https://cromservices.com.au/brand/logo/crom-logo-v26-ink.png";
export const CROM_LOGO_WHITE_URL = "https://cromservices.com.au/brand/logo/crom-logo-v26-white.png";

type Props = { tag?: string; home?: string };

export function CromHeader({ tag, home = "https://cromservices.com.au/" }: Props) {
  return (
    <header className="crom-header">
      <div className="crom-header__inner">
        <a className="crom-brand" href={home} rel="noopener noreferrer" aria-label="Crom Services home">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcSet={CROM_LOGO_WHITE_URL} />
            <img className="crom-logo" src={CROM_LOGO_INK_URL} width={526} height={481} alt="Crom Services" />
          </picture>
        </a>
        {tag ? <span className="crom-tag">{tag}</span> : null}
      </div>
    </header>
  );
}
