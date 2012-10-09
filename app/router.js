define([
  // Application.
  "app",

  // Modules
  "modules/post"
],

function(app, Post) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "new": "create",
      "edit/:id": "edit"
    },

    index: function() {
      app.useLayout("main").setViews({
        "#posts": new Post.Views.List({
          collection: app.posts
        })
      }).render();

      app.posts.fetch();
    },

    create: function() {
      app.useLayout("post").setViews({
        "#post": new Post.Views.Edit({
          model: app.posts.add().last()
        })
      }).render();
    },

    edit: function(id) {
      app.useLayout("post").setViews({
        "#post": new Post.Views.Edit({
          model: app.posts.get(id)
        })
      }).render();
    }
  });

  return Router;

});
