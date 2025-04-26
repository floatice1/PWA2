if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then((registration) => {
        console.log("Service Worker Registered with scope:", registration.scope)
    })
    .catch((error) => {
        console.log("Service Worker Registration failed:", error)
    })
}