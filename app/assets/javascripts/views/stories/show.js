define([
  'jquery',
  'underscore',
  'backbone',
  'models/story',
  'text!templates/stories/show.html'
], function($, _, Backbone, Story, StoryTemplate) {

  var StoriesShowView = Backbone.View.extend({
    el: 'main',
    initialize:function(id){
      var self = this;
      this.story = new Story({id: id});
      this.story.fetch({
        success: function(data) {
          self.render(data);
        }
      })
    },
    render: function(data) {
      var template = _.template(StoryTemplate);
      this.$el.html(template({ story: data }));
    },

    events: {
      "click .delete": "delete"
    },

    delete: function(ev){
      ev.preventDefault();
      this.story.destroy({
        success: function() {
          Backbone.history.navigate('stories', true);
        }
      });
    }
  });

  return StoriesShowView;
});