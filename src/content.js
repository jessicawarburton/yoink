browser.runtime.onMessage.addListener(async (message) => {
    if (message.action === 'runFunctionInContentScript') {
        await extract(message.query, message.contentType, message.attributeName);
    }
});

async function extract(query, contentType, attributeName) {
    const nodes = document.querySelectorAll(query);
    
    const resultArray = Array.from(nodes).map((node) => {
        if (contentType === 'text') {
            const text = node.innerText;
            return text;
        } else if (contentType === 'html') {
            const html = node.outerHTML;
            return html;
        } else if (contentType === 'attribute' && attributeName) {
            const attribute = node.getAttribute(attributeName);
            return attribute;
        }  else {
            return null; 
        }

    }).filter(content => content !== null);

    browser.runtime.sendMessage({ 
        action: 'contentScriptResponse', 
        result: resultArray 
    });
}
