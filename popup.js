document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-lol");

  toggleButton.addEventListener("click", function () {
    // Send a message to the content script to toggle the LOL feature
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      browser.tabs.sendMessage(tabs[0].id, { action: "toggleLOL" });
    });
  });
});
