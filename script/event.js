const remote = require('electron').remote
function getSize() {
  const win =  remote.getCurrentWindow()
  const [width, height] = win.getSize()
  console.log("width:", width);
  console.log("height:", height); 
  
  const [left, top] = win.getPosition()
  console.log("left:", left);
  console.log("top:", top);
  
}


function setSize() {
  const win = remote.getCurrentWindow()
  win.setSize(600,600, true)
  win.setPosition(100,100, true)
}

function setKiosk(){
  const win = remote.getCurrentWindow()
  console.log(win.isKiosk())
  win.setKiosk(!win.isKiosk());
}