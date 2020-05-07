'use strict';

const electron  = require('electron');
const path      = require('path');

function createWindows () {
    // create a window
    let win = new electron.BrowserWindow({
        width:  800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // load the html file
    win.loadURL(`file://${__dirname}/index.html`)
}

// the main entry point
electron.app.whenReady().then(createWindows)

