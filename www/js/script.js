/* JavaScript Document */
function isRunningStandalone() {
    return (window.matchMedia('(display-mode: standalone)').matches);
}

function isRunningMinimal() {
    return (window.matchMedia('(display-mode: minimal-ui)').matches);
}

if (isRunningStandalone()) {
    window.location = "mobilehome.html";
}

if (isRunningMinimal()) {
    window.location = "mobilehome.html";
}
