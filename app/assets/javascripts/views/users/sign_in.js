define([
  'jquery',
  'underscore',
  'backbone',
  'models/user_session',
  'text!templates/users/sign_in.html',
  ], function($, _, Backbone, UserSession, UserSignInTemplate) {
    return Backbone.View.extend({
      el: "main",
      initialize: function(session){
        this.model = session;
      },

      render: function() {
        var template = _.template(UserSignInTemplate);
        this.$el.html(template());
        return this.el;
      },

      events: {
        "click #login": "signIn"
      },

      signIn: function(){
        var self = this;
        this.model.save({
          email: $("input[name='email']").val(),
          password: $("input[name='password']").val(),
        }, {
          success: function(model, response){
            var token = response.authentication_token;
            $(".alert ul").empty()
            $.cookie("authentication_token", token);
            self.model.set({authentication_token: token});
            self.model.trigger("successfulSignIn");
            Backbone.history.navigate('/stories', true);
          },
          error: function(model, response){
            $(".alert ul").empty()
            $('.alert ul').html("<li>You have tried to sign up with an invalid email or password</li>");
          }
        })
      }
    })
});