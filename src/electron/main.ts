import {app, BrowserWindow} from 'electron'
import path from 'path'
import { isDev } from './util.js'
import { getPreloadPath } from './pathResolver.js'

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 1600, 
        height: 900,
        webPreferences: {
            preload: getPreloadPath()
        }
    })
    if(isDev()) {
        mainWindow.loadURL('http://localhost:5123')
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-vue/index.html'))
    }
})