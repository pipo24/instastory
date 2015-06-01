define([
  'jquery',
  'cookie',
  'underscore',
  'backbone',
  'views/application',
  'views/static_pages/home',
  'views/static_pages/about',
  'views/users/sign_in',
  'views/users/sign_up',
  'models/user_session',
  'lib/modules/csrf'
  ], function($, Cookie, _, Backbone, ApplicationView, HomeView, AboutView, SignInView, SignUpView, UserSession, csrf){

    var mainRouter = Backbone.Router.extend({
      routes: {
        ''         : 'home',
        'about'   : 'about',
        'sign_in'  : 'signIn',
        'sign_up'  : 'signUp',
      }
    });

    var layout = function(session){
      new ApplicationView(session).render();
    }

    var getCurrentUser = function(callback){
      var session = new UserSession();
      
      var token = $.cookie("authentication_token");
      if (token != null) {
        $.getJSON("/user/"+token, function(data){
          var session = new UserSession(data);
          callback(session)
        });
      } else {
        var session = new UserSession();
        callback(session)
      } 
    }

    var setRouter = function(session){
      csrf();
      layout(session);
      var router = new mainRouter;

      router.on('route:home', function(){
        // setup homepage template/views/etc....
        new HomeView().render()
      });

      router.on('route:about', function(){
        // setup about us template/views/etc....
        new AboutView().render()
      });

      router.on('route:signUp', function(){
        new SignUpView().render();
      });

      router.on('route:signIn', function(){
        console.log('route:signIn');
        new SignInView(session).render();
      });

      router.on('route:defaultAction', function(actions) {
        console.log('No route:', actions);
      });
    }

    var initialize = function() {
      getCurrentUser(setRouter);
    }

    return {
      initialize: initialize
    }
  });