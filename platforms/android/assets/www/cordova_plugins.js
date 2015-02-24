cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rossgerbasi.cordova.plugins.glass/www/rossgerbasi-glass.js",
        "id": "com.rossgerbasi.cordova.plugins.glass.Glass",
        "clobbers": [
            "rossgerbasi.glass"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.rossgerbasi.cordova.plugins.glass": "1.0.0",
    "org.apache.cordova.geolocation": "0.3.12",
    "org.apache.cordova.device-orientation": "0.3.11"
}
// BOTTOM OF METADATA
});