function delayedConsoleLog(text, delayMilliseconds) {
  setTimeout(() => {
    console.log(text);
  }, delayMilliseconds);
}
delayedConsoleLog("Text with delay 2 seconds", 2000);