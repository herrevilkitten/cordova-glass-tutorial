/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    positionWatcher: 0,
    headingWatcher: 0,

    latitude: 0,
    longitude: 0,
    heading: 0,

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('resume', this.onResume, false);

        document.addEventListener('swipedown', app.onExit);
    },

    onExit: function() {
        app.onPause();

        console.log('Exiting application');
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        }
    },

    onPause: function() {
        console.log('Pausing application');
        if (app.positionWatcher) {
            console.log('Canceling position watcher:', app.positionWatcher);
            navigator.geolocation.clearWatch(app.positionWatcher);
            app.positionWatcher = 0;
        }

        if (app.headingWatcher) {
            console.log('Canceling heading watcher:', app.headingWatcher);
            navigator.compass.clearWatch(app.headingWatcher);
            app.headingWatcher = 0;
        }
    },

    onResume: function() {
        console.log('Resuming application');
        app.onDeviceReady();
    },

    updateBackgroundColor: function() {
        var canvas = document.getElementById('canvas');
        if (!canvas) {
            return;
        }

        canvas.style.backgroundColor = 'rgb(' +
            Math.floor(Math.abs(app.latitude)) + ',' +
            Math.floor(Math.abs(app.longitude)) + ',' +
            (Math.floor(app.heading) % 255) + ')';
    },

    onError: function(error) {
        console.log('An error has occurred: ' + error);
    },

    onWatchPosition: function(position) {
        var latitude = position.coords.latitude,
            longitude = position.coords.longitude;

        console.log('Latitude: ' + latitude + ' Longitude: ' + longitude);
        app.latitude = latitude;
        app.longitude = longitude;
        app.updateBackgroundColor();
    },

    onWatchHeading: function(heading) {
        var magneticHeading = heading.magneticHeading;

        console.log('Magnetic heading: ' + magneticHeading);
        app.heading = magneticHeading;
        app.updateBackgroundColor();
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.addEventListener('swipedown', app.onExit);

        // Watch for changes in position
        if (!app.positionWatcher) {
            app.positionWatcher = navigator.geolocation.watchPosition(app.onWatchPosition, app.onError);
        }

        if (!app.headingWatcher) {
            app.headingWatcher = navigator.compass.watchHeading(app.onWatchHeading, app.onError);
        }
    }
};

app.initialize();
