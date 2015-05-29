define([
  'jquery',
  'underscore',
  'backbone',
  'models/story',
  'models/image',
  'text!templates/stories/show.html'
  ], function($, _, Backbone, Story, Image, StoryTemplate) {

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
        // Ensure no Zombie views
        this.$el.unbind();
        this.$el.html(template({ story: data }));
        this.delegateEvents();
      },

      events: {
        "click .delete": "delete",
        "click .delete-image": "deleteImage",
      },

      delete: function(ev){
        ev.preventDefault();
        var self = this;
        this.story.destroy({
          success: function(){
            self.undelegateEvents();
            Backbone.history.navigate('stories', true);
          }
        });
      },

      deleteImage: function(ev){
        ev.preventDefault();
        var self = this;
        var id = $(ev.currentTarget).data("image-id")
        this.image = new Image({id: id});
        this.image.destroy({
          success: function(){
            self.undelegateEvents();
            Backbone.history.navigate('stories/'+ self.story.id, true);
          }
        });
      }
    });

return StoriesShowView;
});