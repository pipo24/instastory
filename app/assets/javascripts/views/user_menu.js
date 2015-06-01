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
        this.model.on("successfulSignOut", this.render, this);
      },
      events: {
        "click #sign-out" : "signOut"
      },
      signOut: function() {
        this.model.logOut();
        Backbone.history.navigate('/#home', true);
      },
      render: function(){
        var template = _.template(UserMenuTemplate);
        this.$el.html(template({user: this.model}));
        return this;
      }
    })
  })