import React from 'react'
var fs = window.require('fs')

function readdir(path) {
    var files = fs.readdirSync(path)
    return files
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { files: readdir(process.cwd()) }
    }

    filesList() {
        var result =
            <ul>
                {this.state.files.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        return result
    }

    render () {
        return (
            <div style={{background:"#eeeeee"}}>
                <div id="head"><h1>path {process.cwd()} :</h1></div>
                <hr />
                <div id="body">
                    {this.filesList()}
                </div>
            </div>
       )
    }
}

export default App;
