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
    }
  });
});