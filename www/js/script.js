/* JavaScript Document */
function isRunningStandalone() {
    return (window.matchMedia('(display-mode: standalone)').matches);
}

if (isRunningStandalone()) {
    window.location = "mobilehome.html";
}