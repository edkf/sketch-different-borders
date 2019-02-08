import sketch from 'sketch'
import BrowserWindow from 'sketch-module-web-view'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
   
  const browserWindow = new BrowserWindow({
    title: 'Sketch different borders',
    width: 600,
    height: 400
  })
  
  browserWindow.loadURL(require('../resources/index.html'))
}