const { app, BrowserWindow } = require("electron");

function createWindow (){
  let win = new BrowserWindow({
    kiosk: false, //锁定模式，屏蔽了用户操作其他应用以及系统本身的能力，用户要么操作本应用要么退出. 在mac os下，不能将fullscreen设置为true,否则通过函数的形式解除kiosk不生效
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('index.html')

  // 打开开发者工具
  win.webContents.openDevTools()
  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })

  // let child = new BrowserWindow({ parent: win, modal: true, show: false, height: 500 });
  // child.loadURL("https://github.com");
  // child.once("ready-to-show", () => {
  //   child.show();
  // });
}

app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on("activate", () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow();
  }
});