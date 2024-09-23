// Function to append LOL
function appendLOL() {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((paragraph) => {
    walkTextNodes(paragraph);
  });
}

function walkTextNodes(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent
      .replace(/([A-Z])\./g, '$1') // Remove periods after capital letters
      .replace(/([.])+(?!\s)/g, '') // Remove periods not followed by space
      .toLowerCase()
      .replace(/([.!?])+/g, " lol$1"); // append ' lol' to sentences
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
  if (request.action === "lol") {
    appendLOL();
    // Toggle the LOL feature
    // appendLOL(!document.querySelector("span.lol") ? true : false);
  }
});
