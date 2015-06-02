define([
  'underscore',
  'backbone'
  ], function(_, Backbone){

    return Backbone.Model.extend({
      url: "/users/sign_in.json",
      defaults: {
        id: null,
        email: '',
        password: '',
        fullname: '',
        age: null,
        gender: '',
        nickname: '',
        bio: '',
        profile_picture: '',
        stories: [],
        authentication_token: null,
      },
      isLoggedIn: function() {
        return !!this.get("authentication_token");
      },
      logOut: function(){
        var self = this;
        $.ajax({
          url: "/user/"+self.get("authentication_token"),
          method: "DELETE",
          dataType: "json"
        }).done(function(){
          $.removeCookie("authentication_token");
          // Clear all of the fields of the current instance
          self.clear().set(self.defaults);
          self.trigger("successfulSignOut");
        });
      }
    });
  });