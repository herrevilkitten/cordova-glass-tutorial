# Step 4: Where Am I?

In this step, you will add location and orientation support to the
application.  First, we must install the Cordova plugins in order to have
this functionality available in your application.

    cordova plugin add org.apache.cordova.geolocation

    cordova plugin add org.apache.cordova.device-orientation

The documentation for these plugins can be found in the Cordova Plugin
Repository:

    http://plugins.cordova.io/#/package/org.apache.cordova.geolocation

    http://plugins.cordova.io/#/package/org.apache.cordova.device-orientation

Most plugin functionality is handled by adding objects or functions to the
global `window` object.  For instance, the geolocation API adds a `geolocation`
object:

    window.geolocation

The device orientation plugin (and some others) uses the `navigator` object:

    navigator.compass

In order to monitor our location and orientation, we need to add event
handlers for each of them. Both geolocation and device-orientation support
getting the current value and watching for changes over time.

Open up `www/js/index.js`.  Look for the following code:

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

The additional event handlers will be added after this point:

    onError: function(error) {
        console.log('An error has occurred: ' + error);
    },

    onWatchPosition: function(position) {
        var latitude = position.coords.latitude,
            longitude = position.coords.longitude;

        console.log('Latitude: ' + latitude + ' Longitude: ' + longitude);
    },

    onWatchHeading: function(heading) {
        var magneticHeading = heading.magneticHeading;

        console.log('Magnetic heading: ' + magneticHeading);
    },

The `onError` handler will be shared by both the location and heading watches.
`onWatchPosition` will be called when the device detects a position change, but
it may be throttled.  `onWatchHeading` will be called whenever the device
orientation changes.

With the handlers set up, we can now call them from within `onDeviceReady`.
After the `swipedown` handler that you set up in the previous step, add
the following code:

        // Watch for changes in position
        window.geolocation.watchPosition(app.onWatchPosition, app.onError);

        // Watch for changes in orientation
        navigator.compass.watchHeading(app.onWatchHeading, app.onError);

Now run the application.  After you attach the Chrome debugger to it, you will
be able to see the position and orientation changes in the log.

In the next step, we will actually do something with this.
