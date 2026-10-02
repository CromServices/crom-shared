/*!
 * Crom Services shared footer: crom-shared v1
 * Hosted: https://cromservices.github.io/crom-shared/footer.js
 *
 * Drop-in: put <footer data-crom-footer></footer> on the page and load
 *   <script src="https://cromservices.github.io/crom-shared/footer.js" defer></script>
 * Renders the standard line "Crom Services · Australia", optional contact,
 * and the hosted "Built by Crom Services" credit (crom-credit SPEC, hosted at
 * https://cromservices.com.au/brand/credit/).
 *
 * Attributes on the [data-crom-footer] element:
 *   data-credit="auto" | "light" | "dark"
 *                                  auto (default): picks the SPEC light or dark snippet
 *                                  from the resolved scheme (<html data-theme> if set,
 *                                  else prefers-color-scheme) and re-renders if the
 *                                  visitor switches. light/dark: force one.
 *   data-contact="on" | "off"      show cromservices@gmail.com (default off;
 *                                  the packs page must stay "off")
 *   data-credit-show="off"         hide the credit (default shown)
 * Any HTML already inside the element (page links, "sample only" notes) is kept
 * above the standard line.
 */
(function () {
  "use strict";
  var FIRM = "Crom Services";
  var LOCATION = "Australia";
  var EMAIL = "cromservices@gmail.com";
  var CREDIT_BASE = "https://cromservices.com.au/brand/credit/";

  // Verbatim hosted snippets from crom-credit SPEC.md ("Hosted canonical credit").
  var CREDIT = {
    light:
      '<a href="https://cromservices.com.au" target="_blank" rel="noopener noreferrer"\n' +
      '   aria-label="Built by Crom Services"\n' +
      '   style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;color:#4a5752;font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:500;line-height:1;">\n' +
      '  <img src="' + CREDIT_BASE + 'crom-credit-mark-ink@1x.png"\n' +
      '       srcset="' + CREDIT_BASE + 'crom-credit-mark-ink@1x.png 1x, ' + CREDIT_BASE + 'crom-credit-mark-ink@2x.png 2x, ' + CREDIT_BASE + 'crom-credit-mark-ink@3x.png 3x"\n' +
      '       width="34" height="18" alt="" style="display:block;height:18px;width:auto;">\n' +
      '  <span>Built by Crom Services</span>\n' +
      '</a>',
    dark:
      '<a href="https://cromservices.com.au" target="_blank" rel="noopener noreferrer"\n' +
      '   aria-label="Built by Crom Services"\n' +
      '   style="display:inline-flex;align-items:center;gap:8px;text-decoration:none;color:#cdd6d1;font-family:Inter,system-ui,sans-serif;font-size:12px;font-weight:500;line-height:1;">\n' +
      '  <img src="' + CREDIT_BASE + 'crom-credit-mark-white@1x.png"\n' +
      '       srcset="' + CREDIT_BASE + 'crom-credit-mark-white@1x.png 1x, ' + CREDIT_BASE + 'crom-credit-mark-white@2x.png 2x, ' + CREDIT_BASE + 'crom-credit-mark-white@3x.png 3x"\n' +
      '       width="34" height="18" alt="" style="display:block;height:18px;width:auto;">\n' +
      '  <span>Built by Crom Services</span>\n' +
      '</a>'
  };

  function line(contact) {
    var html = FIRM + " · " + LOCATION;
    if (contact) html += ' · <a href="mailto:' + EMAIL + '">' + EMAIL + "</a>";
    return '<p class="crom-footer__line">' + html + "</p>";
  }

  function scheme() {
    var forced = document.documentElement.getAttribute("data-theme");
    if (forced === "dark" || forced === "light") return forced;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function render(el) {
    if (!el.hasAttribute("data-crom-footer-extra")) {
      el.setAttribute("data-crom-footer-extra", el.innerHTML.trim());
    }
    var extra = el.getAttribute("data-crom-footer-extra");
    var v = el.getAttribute("data-credit");
    var variant = v === "dark" || v === "light" ? v : scheme();
    var contact = el.getAttribute("data-contact") === "on";
    var showCredit = el.getAttribute("data-credit-show") !== "off";
    el.classList.add("crom-footer");
    el.innerHTML =
      (extra ? '<div class="crom-footer__extra">' + extra + "</div>" : "") +
      line(contact) +
      (showCredit ? '<div class="crom-footer__credit">' + CREDIT[variant] + "</div>" : "");
  }

  function run() {
    var els = document.querySelectorAll("[data-crom-footer]");
    for (var i = 0; i < els.length; i++) render(els[i]);
  }

  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) mq.addEventListener("change", run);
    else if (mq.addListener) mq.addListener(run);
  }

  window.CromFooter = { render: render, run: run, credit: CREDIT, version: "1.0.0" };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
