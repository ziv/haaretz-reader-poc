# haaretz-reader-poc

This extensin is deprecated

### Overview
Chrome/Chromium extension written as a proof of concept for Haaretz/Themarker auth mechanism bypass.

### Warning
This code is released without any warranty.  
Do not use this code in any activity which is not for a demonstration.  
Using of this code for any other purpose may violate copyrights or criminal law.

### Description
* Haaretz and Themarker websites are using paywall for reading their premium articles.
* The paywall is bypassed if user comes from social network link.
* This extension add each request a "Referer" header indicate the user came from socical network (Facebook in this case).

