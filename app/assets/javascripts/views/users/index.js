define([
  'jquery',
  'underscore',
  'backbone',
  'collections/user',
  'text!templates/users/index.html',
], function($, _, Backbone, UsersCollection, UsersTemplate) {

  var UsersIndexView = Backbone.View.extend({
    el: 'main',
    initialize: function() {
      var self = this;
      var collection = new UsersCollection();
      var data = collection.fetch({
        success: function(data) {
            console.log(data)
          self.render(data)
        }
      });
    },
    render: function(data){
      var template = _.template(UsersTemplate);
      this.$el.html(template({users: data.models}));
    }
  });

  return UsersIndexView;
});