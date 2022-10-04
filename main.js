var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './betterbackground.css';
head.appendChild(link);

chrome.storage.sync.get({
  favoriteoutput: 'console',
}, function(items) {
  if(output){
    switch(items.favoriteoutput) {
      case "console":
          console.log(output);
        break;
      case "alert":
        alert(output);
        break;
      case "all":
        console.log(output);
        alert(output);
        break;
      default:
    }
  }
});
