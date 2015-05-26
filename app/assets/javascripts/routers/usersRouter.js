define([
  'backbone',
  'views/users/sign_in',
  'views/users/sign_up',
  ], function(Backbone, SignInView, SignUpView){

    var Router = Backbone.Router.extend({
      routes: {
        'users/sign_in'  : 'signIn',
        'users/sign_up'  : 'signUp',
      }
    });

    var initialize = function(session) {

      var router = new Router;
    }

    return {
      initialize: initialize
    }
  });