define([
  'backbone',
  'views/users/sign_up',
  ], function(Backbone, SignUpView){

    var Router = Backbone.Router.extend({
      routes: {
        'users/sign_in'  : 'signIn',
        'users/sign_up'  : 'signUp',
      }
    });

    var initialize = function() {

      var router = new Router;

      router.on('route:signUp', function(){
       new SignUpView().render();
     });
    }

    return {
      initialize: initialize
    }
  });