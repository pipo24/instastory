define([
  'jquery',
  'underscore',
  'backbone',
  'views/application',
  'lib/modules/csrf'
  ], function($, _, Backbone, ApplicationView, csrf){

    var Router = Backbone.Router.extend({
      routes: {
        ''               : 'home',
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
      console.log("Home");
    });

    router.on('route:defaultAction', function(actions) {
      console.log('No route:', actions);
    });

  }

  return {
    initialize: initialize
  }
});