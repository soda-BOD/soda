import React from 'react'
var fs = window.require('fs')

async function readdir(path) {
    var files
    await fs.readdir(path, (err, all_files) => {
        if(err) {
            throw Error("path is wrong!")
        }
        files = all_files
    })
    return files
}

function App() {
    var files = null
    readdir('/home/peter/proj').then(value => {
        files = value
    })
    if (files === null) {
        return <div>please waiting...</div>
    } else {
        return (
            <div style={{background:"#eeeeee"}}>
                <div id="head"><h1>path {process.cwd()} :</h1></div>
                <hr />
                <div id="body">
                    <div>{files}</div>
                </div>
            </div>
        )
    }
}

export default App;
