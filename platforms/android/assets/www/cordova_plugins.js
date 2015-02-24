cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rossgerbasi.cordova.plugins.glass/www/rossgerbasi-glass.js",
        "id": "com.rossgerbasi.cordova.plugins.glass.Glass",
        "clobbers": [
            "rossgerbasi.glass"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.rossgerbasi.cordova.plugins.glass": "1.0.0"
}
// BOTTOM OF METADATA
});