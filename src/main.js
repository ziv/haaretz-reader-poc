// TODO: add support for firefox

const GOOGLE_BOT_USER_AGENT = {
    name: 'User-Agent',
    value: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
};

const permissions = {urls: ['https://*.haaretz.co.il/*', 'https://*.themarker.com/*'], types: ['main_frame']};

const opts = ['blocking', 'requestHeaders'];

const filterUserAgent = header => header.name.toLowerCase() !== 'user-agent';

const onBeforeSendHeaders = ({requestHeaders}) => {
    requestHeaders = requestHeaders.filter(filterUserAgent);
    requestHeaders.push(GOOGLE_BOT_USER_AGENT);
    console.log(requestHeaders);
    return {requestHeaders};
};


chrome.webRequest.onBeforeSendHeaders.addListener(onBeforeSendHeaders, permissions, opts);
