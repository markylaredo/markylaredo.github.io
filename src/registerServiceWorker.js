/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      // console.log(
      //   "App is being served from cache by a service worker.\n" +
      //   "For more details, visit https://goo.gl/AFskqB"
      // );
    },
    registered(registration) {
      // console.log("Service worker has been registered.");
      setInterval(() => {
        registration.update();
      }, 1000 * 60 * 60); // e.g. hourly checks
    },
    cached() {
      // console.log("Content has been cached for offline use.");
      document.dispatchEvent(
        new CustomEvent("swOfflineCached", {
          detail: true,
        })
      );
    },
    updatefound() {
      // console.log("New content is downloading.");
    },
    updated(registration) {
      document.dispatchEvent(
        new CustomEvent("swUpdated", {
          detail: registration,
        })
      );
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
  // /* eslint-disable */
  // let refreshing;
  // navigator.serviceWorker.addEventListener("controllerchange", (e) => {
  //   if (refreshing) return;
  //   window.location.reload();
  //   refreshing = true;
  // });
}
