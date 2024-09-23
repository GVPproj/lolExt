// Listen for toolbar button clicks
browser.action.onClicked.addListener(() => {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      browser.tabs.sendMessage(tabs[0].id, { action: "lol" });
    });
  });
  