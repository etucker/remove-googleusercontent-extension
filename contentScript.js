// Try to match URLs like this:
// https://ci3.googleusercontent.com/proxy/BXSTpURWPluGjJKpBFQEEHhPTcoQkEWKc_PpQEaTVIe6pecwdbLsm-R2ne_eTMY7kxSGGVml2ofBVVUBUaqgOMn-QZgOIAV_bQIqzCPDAN0MvG_MPhxmUvFzP5lOLpLUOD4Xni7gS_hOHS-s_3UhSjwxb7ck8Oufjw=s0-d-e1-ft#https://tumblrmarketingp2.files.wordpress.com/2022/09/screen-shot-2022-09-12-at-12.22.57-pm.png?w=1024
const regex = /(https.+googleusercontent\.com\/proxy\/.*)\#(https:.+wordpress.com\/.+)/i;

if(document.readyState === "complete") {
  ExtensionReady();
} else {
  window.onload = function() { ExtensionReady(); }
}

// TODO: This works, but runs *way* too often! Find out what might be a better event to attach to. 
window.addEventListener("DOMNodeInserted", function(event) {
  console.log("DOMNodeInserted");
  ExtensionReady();
});

function ExtensionReady() {
  var images = document.getElementsByTagName('img');
  console.log('Images on page: ', images.length);
  for(let i=0; i<images.length; i++) {
    var img = images[i];
          
    // Replace all images with this one. Scary!
    // let crazyImg = 'https://64.media.tumblr.com/767059b376050e762ba4285992bc8751/413340656b538c6e-38/s2048x3072/0d8dd0fc0495aa9d5c3a8b3caa722f329bed74c6.pnj';
    // img.src = crazyImg;

    var newSrc = img.src.replace(regex, '$2');
    if(newSrc != img.src) {
      console.log('Found image:         ', img.src);
      console.log('Replaced image with: ', newSrc);
      img.src = newSrc;
    }
  };    
}
