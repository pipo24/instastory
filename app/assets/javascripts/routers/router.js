define([
  'jquery',
  'cookie',
  'underscore',
  'backbone',
  'views/application',
  'lib/modules/csrf'
  ], function($, Cookie, _, Backbone, ApplicationView, csrf){

    var Router = Backbone.Router.extend({
      routes: {
        ''               : 'home',
        'users/sign_in'  : 'signIn',
        'users/sign_up'  : 'signUp',
        '*actions'       : 'defaultAction'
      }
    });

    var layout = function(){
     new ApplicationView().render();
   }

   var initialize = function(){

    csrf();
    layout();

    var router = new Router;

    router.on('route:home', function(){
    });

    router.on('route:signIn', function(){
      console.log("sign in route");
    });

    router.on('route:signUp', function(){
      console.log("sign up route");
    });

    router.on('route:defaultAction', function(actions) {
      console.log('No route:', actions);
    });

  }

  return {
    initialize: initialize
  }
});