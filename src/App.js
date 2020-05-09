import React from 'react'
import logo from './logo.svg'
import './App.css'
// import fs from 'fs'
const fs = require('fs')

var files = []
var folders = []

function getFilesList(cwd) {
    fs.readdir(cwd, (err, files) => {
        files.forEach(file => {
            files.push(file)
        })
    })
}

function App() {
    getFilesList(process.cwd())
    return (
        <div style={{background:"#eeeeee"}}>
            <div class="head"><h1>path {process.cwd()} :</h1></div>
            <hr />
            <div class="body">
                <div></div>
            </div>
        </div>
    );
}

export default App;
