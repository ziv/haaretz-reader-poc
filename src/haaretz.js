
// TODO: add support for firefox

const listener = info => {
    let requestHeaders = info.requestHeaders.filter(i => i.name === 'Referer');
    requestHeaders.push({name: 'Referer', value: 'http://www.facebook.com/'});
    return {requestHeaders};
};
const permissions = {urls: ['*://*.haaretz.co.il/*'], types: ['main_frame']};
const opts = ['blocking', 'requestHeaders'];

chrome.webRequest.onBeforeSendHeaders.addListener(listener, permissions, opts);
