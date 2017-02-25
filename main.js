const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', () => {
    let win = new BrowserWindow({width:600, height:800});
    win.loadURL('file://' + __dirname + '/index.html');
});