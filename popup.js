document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("toggle").addEventListener("click", function() {
    // Query the active tab in the current window
    browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
      // Send a message to the active tab's content script
      browser.tabs.sendMessage(tabs[0].id, {action: "toggleGrayscale"});
    });
  });
});

document.getElementById("donate").addEventListener("click", function() {
  window.open('https://thijsbrits.gumroad.com/l/fkdjt', '_blank');
});