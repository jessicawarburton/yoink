document.getElementById('extract').addEventListener('click', async function() {
    const queryValue = document.getElementById('query').value;
    const contentType = document.getElementById('content-type').value;
    const attributeName = document.getElementById('attribute-name').value || null;

    await browser.storage.local.set({query: queryValue})
    if(queryValue){
        browser.runtime.sendMessage({ 
            action: 'triggerActionInContentScript', 
            query: queryValue,
            contentType: contentType,
            attributeName: attributeName
        });
    }

});

document.addEventListener('DOMContentLoaded', async () => {
    const lastQuery = await browser.storage.local.get('query');
    const queryValue = document.getElementById('query');
    if (lastQuery && lastQuery.query) {
        queryValue.value = lastQuery.query;
    }
});

browser.runtime.onMessage.addListener((message) => {
    const resultContainer = document.getElementById('result');
    if (message.action === 'updatePopup') {
        const filteredResults = message.result.filter(item => item && item.trim().length > 0);
        if (filteredResults.length === 0) {
            resultContainer.value = "No content found for this query.";
        } else {
            result.value = "";
            resultContainer.value = filteredResults.join('\n');
        }
    }
});

document.getElementById('content-type').addEventListener('change', function() {
    const attributeInput = document.getElementById('attribute-name');
    attributeInput.style.display = this.value === 'attribute' ? 'initial' : 'none';
});
