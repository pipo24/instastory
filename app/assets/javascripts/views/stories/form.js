define([
  'jquery',
  'underscore',
  'backbone',
  'models/story',
  'text!templates/stories/form.html',
  ], function($, _, Backbone, Story, StoriesFormTemplate) {

    var StoriesFormView = Backbone.View.extend({
      el: 'main',
      initialize: function(id) {
        var self = this;
        if (id) {
          this.story = new Story({id: id});
          this.story.fetch({
            success: function(data) {
              self.render(data);
            }
          })
        } else {
          this.story = new Story();
          self.render(this.story)
        }
      },
      render: function(data) {
        var template = _.template(StoriesFormTemplate);
        var action = this.story.id ? "Update" : "Create";
        this.$el.html(template({ story: data, action: action }));
      },

      events: {
        "click button" : "persist"
      },

      persist: function(){
        var storyData = {};
        var $fields = $('input');
        _($fields).each(function(field){
          storyData[$(field).attr("name")] = $(field).val()
        })
        _(storyData).extend({authentication_token: $.cookie("authentication_token")}) 
        this.story.save(storyData, {
          success: function(data){
            Backbone.history.navigate('stories/'+ data.id, true);
          },
          error: function(model, response){
            var errors = response.responseJSON;
            $('.alert ul').empty();
            _(errors).each(function(error, key){
              $('.alert ul').append("<li>"+key.toUpperCase()+" "+error+"</li>")
            })
          }
        });
      }

    });

return StoriesFormView;
});