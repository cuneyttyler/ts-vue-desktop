const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron', {
    someMethod: () => (callback: (field: any) => void) => callback({})
})