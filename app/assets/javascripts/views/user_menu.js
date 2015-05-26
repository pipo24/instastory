define([
  'jquery',
  'underscore',
  'backbone',
  'models/user_session',
  'text!templates/user_menu.html'
  ], function($, _, Backbone, UserSession, UserMenuTemplate){
    return Backbone.View.extend({
      render: function(){
        var user = new UserSession();
        var template = _.template(UserMenuTemplate);
        this.$el.html(template({user: user}));
        return this;
      }
    })
  })