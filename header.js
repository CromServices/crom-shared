/*!
 * Crom Services shared header: crom-shared v1
 * Hosted: https://cromservices.github.io/crom-shared/header.js
 *
 * Drop-in: <header data-crom-header data-tag="Public demo · fixed-scope packs"></header>
 *   <script src="https://cromservices.github.io/crom-shared/header.js" defer></script>
 * Attributes:
 *   data-tag    optional pill text on the right ("Sample · example project")
 *   data-home   logo link target (default https://cromservices.com.au/)
 *   data-logo-base  optional folder holding crom-logo-v26-ink.png / -white.png
 * Logo base, first match wins: data-logo-base on the header, then
 * window.CROM_LOGO_BASE (set it in ONE small file per repo), then the default
 * https://cromservices.github.io/crom-shared/brand/logo/ (Brand's files, hosted here).
 * Logo: the canonical v26 lock (L-035), one hosted URL per scheme, swapped by
 * system preference with <picture> (DARK-SCHEME-SPEC.md section 4). If the page
 * forces <html data-theme="light|dark">, that variant is used instead.
 * For no-JS pages paste snippets/header.html.
 */
(function () {
  "use strict";
  var DEFAULT_LOGO_BASE = "https://cromservices.github.io/crom-shared/brand/logo/";
  function base(el) {
    var b = (el && el.getAttribute("data-logo-base")) || window.CROM_LOGO_BASE || DEFAULT_LOGO_BASE;
    return b.charAt(b.length - 1) === "/" ? b : b + "/";
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function logo(el) {
    var LOGO_INK = base(el) + "crom-logo-v26-ink.png";     // light backgrounds
    var LOGO_WHITE = base(el) + "crom-logo-v26-white.png"; // dark backgrounds
    var forced = document.documentElement.getAttribute("data-theme");
    var img = function (src) { return '<img class="crom-logo" src="' + src + '" width="526" height="481" alt="Crom Services" />'; };
    if (forced === "dark") return img(LOGO_WHITE);
    if (forced === "light") return img(LOGO_INK);
    return '<picture><source media="(prefers-color-scheme: dark)" srcset="' + LOGO_WHITE + '">' + img(LOGO_INK) + "</picture>";
  }
  function render(el) {
    var home = el.getAttribute("data-home") || "https://cromservices.com.au/";
    var tag = el.getAttribute("data-tag");
    el.classList.add("crom-header");
    el.innerHTML =
      '<div class="crom-header__inner">' +
      '<a class="crom-brand" href="' + esc(home) + '" rel="noopener noreferrer" aria-label="Crom Services home">' + logo(el) + "</a>" +
      (tag ? '<span class="crom-tag">' + esc(tag) + "</span>" : "") +
      "</div>";
  }
  function run() { var els = document.querySelectorAll("[data-crom-header]"); for (var i = 0; i < els.length; i++) render(els[i]); }
  window.CromHeader = { render: render, run: run, logoBase: function () { return base(null); }, logoInk: base(null) + "crom-logo-v26-ink.png", logoWhite: base(null) + "crom-logo-v26-white.png", defaultLogoBase: DEFAULT_LOGO_BASE, version: "1.0.2" };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
