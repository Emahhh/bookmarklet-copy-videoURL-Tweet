javascript:(function(){

  function copyLinkInTitle() {
    let matchedLinks = document.title.match(/(\bhttps?:\/\/t\.co\/[\w-\.]+)/g);
    
    if (matchedLinks) {
      let mediaURL = matchedLinks.slice(-1)[0];
      navigator.clipboard.writeText(mediaURL);
      alert(`Copied ${mediaURL} to clipboard`);
    }else{
      alert('No media URL found');
    }
  }

  copyLinkInTitle();

})()
  
  
