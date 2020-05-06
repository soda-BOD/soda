const electron = require('electron')

function createWindows () {
    // create a window
    let win = new electron.BrowserWindows({
        width:  800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // load the html file
    win.loadFile('index.html')
}

// the main entry point
electron.app.whenReady().then(createWindows)

