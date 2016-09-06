window.addEventListener('load', function(){
  console.log('ready')
  var loadScreen = document.getElementById('load-screen');
  document.body.removeChild(loadScreen);
})

//listening for load event.
//on load, function will look for an id of load-screen
//and remove #load-screen and anything nested within it.
