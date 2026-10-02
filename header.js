/*!
 * Crom Services shared header: crom-shared v1
 * Hosted: https://cromservices.github.io/crom-shared/header.js
 *
 * Drop-in: <header data-crom-header data-tag="Public demo · fixed-scope packs"></header>
 *   <script src="https://cromservices.github.io/crom-shared/header.js" defer></script>
 * Attributes:
 *   data-tag    optional pill text on the right ("Sample · example project")
 *   data-home   logo link target (default https://cromservices.com.au/)
 * The logo is the v26 lock (L-035): black mark in light scheme, white mark in dark,
 * swapped by theme.css. One URL each, below.
 * For no-JS pages paste snippets/header.html instead.
 */
(function () {
  "use strict";
  // black mark for light grounds, white mark for dark grounds (v26 lock, L-035)
  var LOGO = "https://cromservices.github.io/crom-shared/brand/logo-v26-lock-inverse-transparent-tight.png";
  var LOGO_DARK = "https://cromservices.github.io/crom-shared/brand/logo-v26-lock-dark-transparent-tight.png";
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function render(el) {
    if (el.getAttribute("data-crom-header-done") === "1") return;
    var home = el.getAttribute("data-home") || "https://cromservices.com.au/";
    var tag = el.getAttribute("data-tag");
    el.classList.add("crom-header");
    el.innerHTML =
      '<div class="crom-header__inner">' +
      '<a class="crom-brand" href="' + esc(home) + '" rel="noopener noreferrer" aria-label="Crom Services home">' +
      '<span class="crom-when-light"><img class="crom-logo" src="' + LOGO + '" width="526" height="481" alt="Crom Services" /></span>' +
      '<span class="crom-when-dark"><img class="crom-logo" src="' + LOGO_DARK + '" width="526" height="481" alt="Crom Services" /></span></a>' +
      (tag ? '<span class="crom-tag">' + esc(tag) + "</span>" : "") +
      "</div>";
    el.setAttribute("data-crom-header-done", "1");
  }
  function run() { var els = document.querySelectorAll("[data-crom-header]"); for (var i = 0; i < els.length; i++) render(els[i]); }
  window.CromHeader = { render: render, run: run, logo: LOGO, logoDark: LOGO_DARK, version: "1.0.0" };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
