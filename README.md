# Step 3: Exiting the Application

In this step, the application will be changed to add an event listener that
listens for the `swipedown` event.  In Glass, this is a fairly standard event
for going back or existing the application.  Because of the nature of Cordova
applications, the default `swipedown` listener is never called.  To get around
this, we must create our own listener.

Open `www/js/index.js`.  You'll make a few changes in there.  First, add the
following code after the `bindEvents` definition:

    onExit: function() {
        console.log('Exiting application');
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        }
    },

This will set up a handler function that will close the application.  In
order to use this handler, we need to add some code to the `onDeviceReady`
function.  Look for the following line:

        app.receivedEvent('deviceready');

In the same function, after this line, add:

        document.addEventListener('swipedown', app.onExit);

After running the application, a swipe down will now exit the application. In
the future, if you want to provide support for going "back" within your
application, you'll need to provide additional logic.  For instance, you may
push pages onto a stack and only exit the appliation if the stack is empty.

