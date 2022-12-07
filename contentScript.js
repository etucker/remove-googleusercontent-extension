// Intercept 404 errors trying to load images that match URLs like this:
// https://ci3.googleusercontent.com/proxy/BXSTpURWPluGjJKpBFQEEHhPTcoQkEWKc_PpQEaTVIe6pecwdbLsm-R2ne_eTMY7kxSGGVml2ofBVVUBUaqgOMn-QZgOIAV_bQIqzCPDAN0MvG_MPhxmUvFzP5lOLpLUOD4Xni7gS_hOHS-s_3UhSjwxb7ck8Oufjw=s0-d-e1-ft#https://tumblrmarketingp2.files.wordpress.com/2022/09/screen-shot-2022-09-12-at-12.22.57-pm.png?w=1024
const regex = /(https.+googleusercontent\.com\/proxy\/.*)\#(https:.+wordpress.com\/.+)/i;
// Then replace them with URLs where the googleusercontent proxy is removed.

window.addEventListener('error', function(e) {
  console.log('Intercepted error: ', e);
  
  // Not sure the best way to only proceed for 404 errors of an image. 
  var img = e.target;
  if (img['src']) { 
    // console.log('  e.target:', e.target);     
  
    // Replace the image src if it matches our regex
    var newSrc = img['src'].replace(regex, '$2');
    if(newSrc != img['src']) {
      console.log('Replacing image to: ', newSrc);
      img['src'] = newSrc;
    }
  }
}, true)