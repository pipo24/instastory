define([
  'jquery',
  'underscore',
  'backbone',
  'collections/image',
  'text!templates/images/index.html',
], function($, _, Backbone, ImagesCollection, ImagesTemplate) {

  var ImagesIndexView = Backbone.View.extend({
    el: 'main',
    initialize: function() {
      var self = this;
      var collection = new ImagesCollection();
      var data = collection.fetch({
        success: function(data) {
          self.render(data)
        }
      });
    },
    render: function(data){
      var template = _.template(ImagesTemplate);
      this.$el.html(template({images: data.models}));
      return this.$el;
    }
  });

  return ImagesIndexView;
});