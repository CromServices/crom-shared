/**
 * Crom Services shared header for React / Next: crom-shared v1.
 * Same markup as header.js. Logo from one hosted URL per scheme (L-035); theme.css swaps them.
 */
export const CROM_LOGO_URL =
  "https://cromservices.github.io/crom-shared/brand/logo-v26-lock-inverse-transparent-tight.png";
export const CROM_LOGO_DARK_URL =
  "https://cromservices.github.io/crom-shared/brand/logo-v26-lock-dark-transparent-tight.png";

type Props = { tag?: string; home?: string };

export function CromHeader({ tag, home = "https://cromservices.com.au/" }: Props) {
  return (
    <header className="crom-header">
      <div className="crom-header__inner">
        <a className="crom-brand" href={home} rel="noopener noreferrer" aria-label="Crom Services home">
          <span className="crom-when-light">
            <img className="crom-logo" src={CROM_LOGO_URL} width={526} height={481} alt="Crom Services" />
          </span>
          <span className="crom-when-dark">
            <img className="crom-logo" src={CROM_LOGO_DARK_URL} width={526} height={481} alt="Crom Services" />
          </span>
        </a>
        {tag ? <span className="crom-tag">{tag}</span> : null}
      </div>
    </header>
  );
}
