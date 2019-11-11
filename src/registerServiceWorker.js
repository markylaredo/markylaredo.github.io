/* eslint-disable no-console */

import {
  register
} from "register-service-worker";
import alertify from "alertifyjs";


if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
        "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      // console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      // console.log("New content is downloading.");
      alertify.notify('New content is downloading.', "primary", 2, function () {
        console.log('dismissed');
      });
    },
    updated() {
      alertify.notify('New content is available; please refresh.', "primary", 2, function () {
        console.log('dismissed');
      });
      // console.log("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
      alertify.notify('No internet connection found. App is running in offline mode', "primary", 2, function () {
        console.log('dismissed');
      });
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });
  /* eslint-disable */
  // let refreshing;
  // navigator.serviceWorker.addEventListener("controllerchange", e => {
  //   if (refreshing) return;
  //   window.location.reload();
  //   refreshing = true;
  // });
}