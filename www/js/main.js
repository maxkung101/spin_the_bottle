if ( "serviceWorker" in navigator ) {
  navigator.serviceWorker.register( "/serviceWorker.js", { scope: "/" }).then(() => {
    console.log("Install succeeded as the max allowed scope was overriden to '/'.");
  });
}
