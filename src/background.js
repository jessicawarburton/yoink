browser.runtime.onMessage.addListener((message) => {
    if (message.action === 'triggerActionInContentScript') {
        browser.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            if (tabs[0]) {
                browser.tabs.sendMessage(tabs[0].id, {
                        action: 'runFunctionInContentScript',
                        query: message.query,
                        contentType: message.contentType,
                        attributeName: message.attributeName
                    })
                    .catch(error => {
                        console.error("Could not send message to content script: ", error);
                    });
            } else {
                console.error("No active tab found.");
            }
        })
    } else if (message.action === 'contentScriptResponse') {
        browser.runtime.sendMessage({
            action: 'updatePopup',
            result: message.result
        });
    }
});