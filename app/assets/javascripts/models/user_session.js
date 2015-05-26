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
        role: '',     
        age: null,     
        gender: '',     
        profile_picture: '',   
        authentication_token: ''      
      },
      isLoggedIn: function() {
        return !!this.get("authentication_token");
      },
      logOut: function(){
        var self = this;
        $.ajax({
          url: "/users/"+self.get("authentication_token"),
          method: "DELETE",
          dataType: "json"
        }).done(function(data){
          $.removeCookie("authentication_token");
          // Clear all of the fields of the current instance
          self.clear().set(self.defaults);
          self.trigger("successfulSignOut");
        });
      }
    });
  });