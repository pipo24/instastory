define([
  'jquery',
  'underscore',
  'backbone',
  'models/user_session',
  'text!templates/user_menu.html'
  ], function($, _, Backbone, UserSession, UserMenuTemplate){
    return Backbone.View.extend({
      initialize: function(session) {
        this.model = session;
        this.model.on("successfulSignIn", this.render, this);
      },

      render: function(){
        var template = _.template(UserMenuTemplate);
        this.$el.html(template({user: this.model}));
        return this;
      }
    })
  })