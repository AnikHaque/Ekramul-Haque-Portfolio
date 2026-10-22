/* EKRAMUL HAQUE — MULTI-PAGE TRANSITION */
(() => {
  const loader = document.getElementById("page-loader");
  if (!loader) return;
  const minimumDisplay = 450;
  const startedAt = performance.now();
  let isLeaving = false;

  function hideLoader() {
    const delay = Math.max(0, minimumDisplay - (performance.now() - startedAt));
    window.setTimeout(() => {
      loader.classList.add("is-hidden");
      document.body.classList.remove("page-transitioning");
      window.setTimeout(() => loader.setAttribute("aria-hidden", "true"), 450);
    }, delay);
  }

  if (document.readyState === "complete") hideLoader();
  else window.addEventListener("load", hideLoader, { once: true });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.hasAttribute("download") || link.getAttribute("target") === "_blank") return;

    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(href)) return;

    let destination;
    try { destination = new URL(link.href, location.href); } catch { return; }
    if (destination.origin !== location.origin) return;
    if (destination.pathname === location.pathname && destination.search === location.search) return;

    isLeaving = true;
    event.preventDefault();
    loader.removeAttribute("aria-hidden");
    loader.classList.remove("is-hidden");
    document.body.classList.add("page-transitioning");
    window.setTimeout(() => { location.href = destination.href; }, 260);
  });

  window.addEventListener("pageshow", () => {
    if (isLeaving) { isLeaving = false; return; }
    loader.classList.add("is-hidden");
    document.body.classList.remove("page-transitioning");
  });
})();
