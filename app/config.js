// Set the require.js configuration for your application.
require.config({

  // urlArgs: 'bust='+ (new Date()).getTime(),

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries.
    jquery: "../assets/js/libs/jquery",
    lodash: "../assets/js/libs/lodash",
    backbone: "../assets/js/libs/backbone"
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    // Backbone.LayoutManager depends on Backbone.
    "plugins/backbone.layoutmanager": ["backbone"],

    // Backbone.LocalStorage depends on Backbone.
    "plugins/backbone.localstorage": ["backbone", "plugins/store.min"],

    // Localstorage shim.
    "plugins/store.min": ["plugins/json3.min"],

    // JSON 3 shim.
    "plugins/json3.min": []
  }

});
