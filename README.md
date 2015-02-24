# Step 3: Exiting the Application

In this step, the application will be changed to add an event listener that
listens for the `swipedown` event.  In Glass, this is a fairly standard event
for going back or existing the application.  Because of the nature of Cordova
applications, the default `swipedown` listener is never called.  To get around
this, we must create our own listener.

Open `www/js/index.js` and look for the line

        app.receivedEvent('deviceready');

In the same function, after this line, add:

        document.addEventListener('swipedown', function() {
            if (navigator && navigator.app) {
                navigator.app.exitApp();
            } else {
                console.log("Exiting Application");
            }
        });

After running the application, a swipe down will now exit the application. In
the future, if you want to provide support for going "back" within your
application, you'll need to provide additional logic.  For instance, you may
push pages onto a stack and only exit the appliation if the stack is empty.
