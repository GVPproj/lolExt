// Function to append LOL
function appendLOL(toggle = true) {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((paragraph) => {
    walkTextNodes(paragraph);
  });
}

function walkTextNodes(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent
      .toLowerCase()
      .replace(/([.!?])+/g, " lol$1");
  } else {
    node.childNodes.forEach((child) => {
      walkTextNodes(child);
    });
  }
}

// Run the function on page load
document.addEventListener("DOMContentLoaded", () => appendLOL());

// Listen for messages from the popup.js script
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleLOL") {
    appendLOL();
    // Toggle the LOL feature
    // appendLOL(!document.querySelector("span.lol") ? true : false);
  }
});
