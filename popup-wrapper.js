chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id, {
        // showPopup acutally toggles popup here
        code: 'window.__STOPSOUND_LOADED ? (showPopup(), true) : false'
    }, res => {
        if (!res[0]) {
            chrome.tabs.executeScript(tabs[0].id, {
                file: '/content.js'
            })

            chrome.tabs.insertCSS(tabs[0].id, {
                file: '/content.css'
            })

        }

        window.close();
    });
});