# lesson-loading-page

Creating a loading screen that display a loading image, gif, or video that will display until the
webpages content has loaded.

STEP 1:

Create 2 div containers.
-container 1 will be given an id of load-screen.
-load-screen will contain the loading image, gif, or video

-container 2 will be contain any content.  This will be the rest of your webpage.

STEP 2:

Create a js file that will listen for a load event.
While the page is loading, container 1 will be visible
and display your loading image.

When the page is done loading,
our function will look for the id load-screen
and remove it with any of it's children.

window.addEventListener('load', function(){
  console.log('ready')
  var loadScreen = document.getElementById('load-screen');
  document.body.removeChild(loadScreen);
})
