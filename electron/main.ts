import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
    });

    const startUrl = app.isPackaged
        ? `file://${path.join(__dirname, '../out/index.html')}`
        : 'http://localhost:3000';

    win.loadURL(startUrl);
}

app.whenReady().then(createWindow);

ipcMain.on("hello", () => {
    console.log("👋 Hello from Renderer (Next.js)!");
});

ipcMain.handle("get-version", () => {
    return app.getVersion();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
