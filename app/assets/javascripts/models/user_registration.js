define([
  'underscore',
  'backbone'
], function(_, Backbone){

  return Backbone.Model.extend({
    url: "/users.json",
    defaults: {
      id: null,
      email: '',
      password: '',
      password_confirmation: '',
      fullname: '',    
      age: null,     
      gender: '',    
      nickname: '',
      bio: '', 
      profile_picture: '',
      stories: [],
    }
  });
});
