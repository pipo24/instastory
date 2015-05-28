define([
  'jquery',
  'underscore',
  'backbone',
  'models/user',
  'text!templates/users/show.html'
  ], function($, _, Backbone, User, UserTemplate) {

    var UsersShowView = Backbone.View.extend({
      el: 'main',
      initialize:function(id){
        var self = this;
        this.user = new User({id: id});
        this.user.fetch({
          success: function(data) {
            console.log(data)
            self.render(data);
          }
        })
      },
      render: function(data) {
        var template = _.template(UserTemplate);

      // Ensure no Zombie views
      this.$el.unbind();
      this.$el.html(template({ user: data }));
      this.delegateEvents();
    },

    events: {
      "click .delete": "delete"
    },

    delete: function(ev){
      ev.preventDefault();
      var self = this;
      this.user.destroy({
        success: function(){
          self.undelegateEvents();
          Backbone.history.navigate('users', true);
        }
      });
    }
  });

    return UsersShowView;
  });