let changeColor = document.getElementById("changeColor");

const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];
let index = 0;

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let color = presetButtonColors[index++ % presetButtonColors.length];
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
    args: [color],
  });
  changeColor.style.backgroundColor = color;
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
