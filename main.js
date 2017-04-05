const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var mainWindow = null;
app.on('ready', function(){
    mainWindow = new BrowserWindow( {
        width: 612;
        height: 384;
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});