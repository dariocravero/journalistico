define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  var Views = {};

  Views.Edit = Backbone.View.extend({
    template: "post/edit",

    events: {
      'keyup .title': 'update_title',
      'keyup .content': 'update_content'
    },

    serialize: function() {
      return {
        title: this.model.get("title"),
        content: this.model.get("content")
      };
    },

    update_title: function(ev) {
      this.model.save({title: this.$('.title').text()});
    },

    update_content: function(ev) {
      this.model.save({content: this.$('.content').text()});
    }
  });

  Views.Item = Backbone.View.extend({
    template: "post/item",

    tagName: "li",

    events: {
      'click .title': 'edit',
      'click .content': 'edit',
      'click .destroy': 'destroy'
    },

    className: 'post',

    serialize: function() {
      return {
        title: this.model.get("title"),
        content: this.model.get("content")
      };
    },

    // The TodoView listens for changes to its model, re-rendering. Since
    // there's a one-to-one correspondence between a **Todo** and a
    // **TodoView** in this app, we set a direct reference on the model for
    // convenience.
    initialize: function() {
      this.model.on("change", function() {
        this.render();
      }, this);

      this.model.on("destroy", function() {
        this.remove();
      }, this);
    },

    edit: function() {
      app.router.navigate('edit/' + this.model.id, true);
    },

    destroy: function() {
      this.model.destroy();
      this.remove();
    }
  });

  Views.List = Backbone.View.extend({
    tagName: "ul",

    className: 'posts',

    render: function(manage) {
      this.collection.each(function(item) {
        this.insertView(new Views.Item({
          model: item
        }));
      }, this);

      return manage(this).render();
    },

    initialize: function() {
      this.collection.on("reset", function() {
        this.render();
      }, this);

      this.collection.on("add", function(item) {
        this.insertView(new Views.Item({
          model: item
        })).render();
      }, this);
    }
  });

  return Views;

});
