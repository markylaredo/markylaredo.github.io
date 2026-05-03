/* eslint-disable no-console */

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  const swUrl = `${import.meta.env.BASE_URL}service-worker.js`;

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register(swUrl);

      setInterval(() => {
        registration.update();
      }, 1000 * 60 * 60);

      if (navigator.onLine) {
        document.dispatchEvent(
          new CustomEvent("swOfflineCached", {
            detail: true,
          })
        );
      }

      registration.addEventListener("updatefound", () => {
        const installingWorker = registration.installing;
        if (!installingWorker) return;

        installingWorker.addEventListener("statechange", () => {
          if (
            installingWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            document.dispatchEvent(
              new CustomEvent("swUpdated", {
                detail: registration,
              })
            );
          }
        });
      });
    } catch (error) {
      console.error("Error during service worker registration:", error);
    }
  });
}
