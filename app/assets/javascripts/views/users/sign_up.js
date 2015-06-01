define([
  'jquery',
  'underscore',
  'backbone',
  'models/user_registration',
  'text!templates/users/sign_up.html',
  ], function($, _, Backbone, UserRegistration, UserSignUpTemplate) {

    return Backbone.View.extend({
      el: "main",

      render: function() {
        var template = _.template(UserSignUpTemplate);
        this.$el.html(template());
        return this.el;
      },

      events: {
        "click #signup": "signUp"
      },

      signUp: function(){
        var user = new UserRegistration();
        user.save({
          email: $("input[name='email']").val(),
          fullname: $("input[name='fullname']").val(),
          age: $("input[name='age']").val(),
          gender: $("select[name='gender']").val(),
          profile_picture: $("input[name='profile_picture']").val(),
          password: $("input[name='password']").val(),
          password_confirmation: $("input[name='password_confirmation']").val()
        }, {
          success: function(model, response){
            $('.alert ul').empty();
            _(response).each(function(message){
              $('.alert ul').append("<li>"+message+"</li>")
            })
            Backbone.history.navigate('/stories', true);
          },
          error: function(model, response){
            var errors = response.responseJSON;
            $('.alert ul').empty();
            _(errors).each(function(error){
              $('.alert ul').append("<li>"+error+"</li>")
            })
          }
        })
      }
    });
});