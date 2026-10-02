/**
 * Crom Services shared footer for React / Next: crom-shared v1.
 * Same output as footer.js: "Crom Services · Australia", optional contact,
 * then the hosted credit (CromCredit, adopted verbatim from booking-demo 9ff8fa7).
 * Packs-style pages keep contact off (the default).
 * variant "auto" needs crom-shared theme.css loaded (it owns the .crom-when-* swap).
 */
import type { ReactNode } from "react";
import { CromCredit } from "./CromCredit";

type Props = {
  /** "auto" (default) follows theme.css light/dark; "light"/"dark" force one */
  variant?: "auto" | "light" | "dark";
  /** show cromservices@gmail.com */
  contact?: boolean;
  /** page-specific links or notes, rendered above the standard line */
  children?: ReactNode;
};

export const CROM_FIRM = "Crom Services";
export const CROM_LOCATION = "Australia";
export const CROM_EMAIL = "cromservices@gmail.com";

export function CromFooter({ variant = "auto", contact = false, children }: Props) {
  return (
    <footer className="crom-footer">
      {children ? <div className="crom-footer__extra">{children}</div> : null}
      <p className="crom-footer__line">
        {CROM_FIRM} · {CROM_LOCATION}
        {contact ? (
          <>
            {" · "}
            <a href={`mailto:${CROM_EMAIL}`}>{CROM_EMAIL}</a>
          </>
        ) : null}
      </p>
      <div className="crom-footer__credit">
        {variant === "auto" ? (
          <>
            <span className="crom-when-light"><CromCredit variant="light" /></span>
            <span className="crom-when-dark"><CromCredit variant="dark" /></span>
          </>
        ) : (
          <CromCredit variant={variant} />
        )}
      </div>
    </footer>
  );
}
