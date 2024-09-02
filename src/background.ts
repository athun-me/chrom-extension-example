/// <reference types="chrome"/>

chrome.action.onClicked.addListener(() => {
    const newTabUrl = chrome.runtime.getURL('newtab.html');
    chrome.tabs.create({ url: newTabUrl });
});
