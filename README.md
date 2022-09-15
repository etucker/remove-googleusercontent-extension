# Remove googleusercontent.com image proxy for gmail
This Chrome extension will remove the googleusercontent.com proxy that gmail
adds for images in an email, for whatever pattern of URLs you wish. 

## Example
You receive an email that has an image URL which gmail has changed to look like this:

https://ci3.googleusercontent.com/proxy/BXSTpURWPluGjJKpBFQEEHhPTcoQkEWKc_PpQEaTVIe6pecwdbLsm-R2ne_eTMY7kxSGGVml2ofBVVUBUaqgOMn-QZgOIAV_bQIqzCPDAN0MvG_MPhxmUvFzP5lOLpLUOD4Xni7gS_hOHS-s_3UhSjwxb7ck8Oufjw=s0-d-e1-ft#https://tumblrmarketingp2.files.wordpress.com/2022/09/screen-shot-2022-09-12-at-12.22.57-pm.png?w=1024

This extension will alter the URL of the image to be the original URL:

https://tumblrmarketingp2.files.wordpress.com/2022/09/screen-shot-2022-09-12-at-12.22.57-pm.png?w=1024

## Reference documentation
1. [Getting started with Chrome Extenstions](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
1. [How to inject with static declarations](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#static-declarative)
1. [Getting the timing of a Gmail Chrome extension content script just right](https://www.gmass.co/blog/timing-gmail-chrome-extension-content-script/)

## Eli's notes
* Email to test with: https://mail.google.com/mail/u/0/?zx=sqbv1jbd2shd#starred/FMfcgzGqQSRKZqqgzQClPPjBZfkSxmJK 
