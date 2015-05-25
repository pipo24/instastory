define([
  'jquery',
  'underscore',
  'backbone',
  'collections/story',
  'text!templates/stories/index.html',
], function($, _, Backbone, StoriesCollection, StoriesTemplate) {

  var StoriesIndexView = Backbone.View.extend({
    el: 'main',
    initialize: function() {
      var self = this;
      var collection = new StoriesCollection();
      var data = collection.fetch({
        success: function(data) {
          self.render(data)
        }
      });
    },
    render: function(data){
      var template = _.template(StoriesTemplate);
      this.$el.html(template({stories: data.models}));
    }
  });

  return StoriesIndexView;
});