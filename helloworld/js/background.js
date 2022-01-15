const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];
const index = 0;
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: presetButtonColors[index] });
});
