// ==========================================
// NSPK DEMO - API CONFIG
// ==========================================

(function () {
  const hostname =
    window.location.hostname;

  const isLocal =
    hostname === "localhost" ||
    hostname === "127.0.0.1";

  if (isLocal) {
    window.NSPK_DEMO_API_BASE =
      "http://127.0.0.1:8016";

    return;
  }

  window.NSPK_DEMO_API_BASE =
    "https://api-demo-profilhijau.nusanova.org";
})();