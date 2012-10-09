define([
  // Application.
  "app",

  // Views
  "modules/post/views",

  // Plugins
  "plugins/backbone.localstorage"
],

// Map dependencies from above array.
function(app, Views) {

  // Create a new module.
  var Post = app.module();

  // Default model.
  Post.Model = Backbone.Model.extend({
    defaults: {
      title: ":)",
      content: "Share your ideas..."
    }
  });

  // Default collection.
  Post.Collection = Backbone.Collection.extend({
    model: Post.Model,

    localStorage: new Store("journalistico-posts")
  });

  // Post Views
  // ----------

  // Attach the Views sub-module into this module.
  Post.Views = Views;

  // Return the module for AMD compliance.
  return Post;

});
