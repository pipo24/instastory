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
        'about'    : 'about',
        'sign_in'  : 'signIn',
        'sign_up'  : 'signUp',
      }
    });

    var layout = function(session){
      new ApplicationView(session).render();
    }

    var getCurrentUser = function(callback){

      if (window.authenticationToken) {
        $.cookie("authentication_token", window.authenticationToken);
      }

      var token = $.cookie("authentication_token");
      console.log(token)

      if (token != null) {
        $.getJSON("/user/"+token, function(data){
          var session = new UserSession(data.user);
          if (window.authenticationToken) {
            session.trigger("successfulSignIn");
            callback(session);
          } else {
            callback(session);
            var session = new UserSession();
          }
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
        new HomeView().render()
      });

      router.on('route:about', function(){
        new AboutView().render()
      });

      router.on('route:signUp', function(){
        new SignUpView().render();
      });

      router.on('route:signIn', function(){
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