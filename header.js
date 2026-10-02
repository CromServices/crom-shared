/*!
 * Crom Services shared header: crom-shared v1
 * Hosted: https://cromservices.github.io/crom-shared/header.js
 *
 * Drop-in: <header data-crom-header data-tag="Public demo · fixed-scope packs"></header>
 *   <script src="https://cromservices.github.io/crom-shared/header.js" defer></script>
 * Attributes:
 *   data-tag    optional pill text on the right ("Sample · example project")
 *   data-home   logo link target (default https://cromservices.com.au/)
 * Logo: the canonical v26 lock (L-035), one hosted URL per scheme, swapped by
 * system preference with <picture> (DARK-SCHEME-SPEC.md section 4). If the page
 * forces <html data-theme="light|dark">, that variant is used instead.
 * For no-JS pages paste snippets/header.html.
 */
(function () {
  "use strict";
  var LOGO_INK = "https://cromservices.com.au/brand/logo/crom-logo-v26-ink.png";     // light backgrounds
  var LOGO_WHITE = "https://cromservices.com.au/brand/logo/crom-logo-v26-white.png"; // dark backgrounds
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function logo() {
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
      '<a class="crom-brand" href="' + esc(home) + '" rel="noopener noreferrer" aria-label="Crom Services home">' + logo() + "</a>" +
      (tag ? '<span class="crom-tag">' + esc(tag) + "</span>" : "") +
      "</div>";
  }
  function run() { var els = document.querySelectorAll("[data-crom-header]"); for (var i = 0; i < els.length; i++) render(els[i]); }
  window.CromHeader = { render: render, run: run, logoInk: LOGO_INK, logoWhite: LOGO_WHITE, version: "1.0.0" };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
