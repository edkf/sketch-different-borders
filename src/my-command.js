import sketch from 'sketch'
import BrowserWindow from 'sketch-module-web-view'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  sketch.UI.message("It's alive 🙌")
  const options = {
    identifier: '1234',
  }
  
  const browserWindow = new BrowserWindow(options)
  
  browserWindow.loadURL(require('./index.html'))
}