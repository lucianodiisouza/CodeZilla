const remote = require("electron").remote;

const minimize = document.getElementById("minimize");
const maximize = document.getElementById("maximize");
const close = document.getElementById("close");

minimize.addEventListener("click", minimizeApp);
maximize.addEventListener("click", maximizeApp);
close.addEventListener("click", closeApp);

function minimizeApp(){
    remote.BrowserWindow.getFocusedWindow().minimize();
}
function maximizeApp(){
    remote.BrowserWindow.getFocusedWindow().maximize();
}
function closeApp(){
    remote.getCurrentWindow().close();
}