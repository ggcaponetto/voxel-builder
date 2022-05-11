const { app, BrowserWindow, nativeImage, globalShortcut } = require('electron');

const APPICON = "data:image/png;base64,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";

if (!app.requestSingleInstanceLock()) {
    app.exit(0);
}

function createWindow() {
    const mainWindow = new BrowserWindow({
        icon: nativeImage.createFromDataURL(APPICON),
        width: 1400,
        height: 900,
        autoHideMenuBar: true,
        resizable: true,
        alwaysOnTop: false,
        webPreferences: {
            nodeIntegration: false
        }
    });

    mainWindow.loadFile('index.html');
    //mainWindow.webContents.openDevTools();

    const reload = ()=> mainWindow.reload();
    const regReload = ()=> globalShortcut.register('f5', reload);
    const unregReload = ()=> globalShortcut.unregister('f5', reload);
    mainWindow.on('focus', regReload);
    mainWindow.on('blur', unregReload);
    mainWindow.on('beforeunload', unregReload);
    mainWindow.on('closed', () => {});
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});
