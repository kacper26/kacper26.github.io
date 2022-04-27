if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./sw.js")
      // Promise syntax - promise means that at some point this will 
      // be finished succefully or not (asynchronous js)
      .then(res => console.log("Service Worked registered."))
      .catch(err => console.log("Service Worker not registered.", err))
  })
}