const { app, BrowserWindow } = require('electron');

let mainWindows;

app.on('ready', crearWindows)

function crearWindows(){
    mainWindows = new BrowserWindow({
        width: 800,
        height: 600,
    });

    mainWindows.loadFile('index.html');

};






