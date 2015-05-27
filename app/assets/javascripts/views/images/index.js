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
          console.log("yo")
          self.render(data)
        }
      });
    },
    render: function(data){
      var template = _.template(ImagesTemplate);
      this.$el.html(template({images: data.models}));
      // $('body').append(template({images: data.models}))
      return this.$el;
    }
  });

  return ImagesIndexView;
});