define([
  'jquery',
  'underscore',
  'backbone',
  'models/image',
  'text!templates/images/form.html',
  ], function($, _, Backbone, Image, ImagesFormTemplate) {

    var ImagesFormView = Backbone.View.extend({
      el: 'main',
      initialize: function(id) {
        var self = this;
        if (id) {
          this.image = new Image({id: id});
          this.image.fetch({
            success: function(data) {
              self.render(data);
            }
          })
        } else {
          this.image = new Image();
          self.render(this.image)
        }
      },
      render: function(data) {
        var template = _.template(ImagesFormTemplate);
        var action = this.image.id ? "Update" : "Create";
        this.$el.html(template({ image: data, action: action }));
      },

      events: {
        "click button" : "persist"
      },

      persist: function(){
        var imageData = {};
        var $fields = $('input');
        _($fields).each(function(field){
          imageData[$(field).attr("name")] = $(field).val()
        })
        this.image.save(imageData, {
          success: function(data){
            // story_id = data.attributes.story.id
            Backbone.history.navigate('images/'+ data.id, true);
          }
        });
      }

    });

return ImagesFormView;
});