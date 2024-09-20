// Function to append LOL
function appendLOL(toggle = true) {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((paragraph) => {
    const lolSpan = paragraph.querySelector("span.lol");

    if (toggle) {
      // Add LOL
      if (!lolSpan) {
        walkTextNodes(paragraph);
      }
    } else {
      // Remove LOL
      if (lolSpan) {
        lolSpan.remove();
      }
    }
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

// Listen for messages from the background script
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleLOL") {
    // Toggle the LOL feature
    appendLOL(!document.querySelector("span.lol") ? true : false);
  }
});
