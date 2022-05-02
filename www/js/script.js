/* JavaScript Document */
function isRunningStandalone() {
    return (window.matchMedia('(display-mode: standalone)').matches);
}

function isRunningMinimal() {
    return (window.matchMedia('(display-mode: minimal-ui)').matches);
}

if (isRunningStandalone()) {
    window.location = "index.html";
}

if (isRunningMinimal()) {
    window.location = "index.html";
}
