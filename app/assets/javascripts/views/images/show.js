define([
  'jquery',
  'underscore',
  'backbone',
  'models/image',
  'text!templates/images/show.html'
  ], function($, _, Backbone, Image, ImageTemplate) {

    var ImagesShowView = Backbone.View.extend({
      el: 'main',
      initialize:function(id){
        var self = this;
        this.image = new Image({id: id});
        this.image.fetch({
          success: function(data) {
            self.render(data);
          }
        })
      },
      render: function(data) {
        var template = _.template(ImageTemplate);

      // Ensure no Zombie views
      this.$el.unbind();
      this.$el.html(template({ image: data }));
      this.delegateEvents();
    },

    events: {
      "click .delete": "delete"
    },

    delete: function(ev){
      ev.preventDefault();
      var self = this;
      this.image.destroy({
        success: function(){
          self.undelegateEvents();
          Backbone.history.navigate('images', true);
        }
      });
    }
  });

    return ImagesShowView;
  });