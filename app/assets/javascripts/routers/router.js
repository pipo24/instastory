define([
  'jquery',
  'cookie',
  'underscore',
  'backbone',
  'views/application',
  'views/static_pages/home',
  'views/users/sign_in',
  'views/users/sign_up',
  'models/user_session',
  'lib/modules/csrf'
  ], function($, Cookie, _, Backbone, ApplicationView, HomeView, SignInView, SignUpView, UserSession, csrf){

    // Issue is that this Router does not initialize on static pages
    var mainRouter = Backbone.Router.extend({
      routes: {
        ''         : 'home',
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

      var router = new mainRouter();

      router.on('route:home', function(){
        console.log("Home");
        new HomeView().render();
      });

      router.on('route:signUp', function(){
        new SignUpView().render();
      });

      router.on('route:signIn', function(){
        new SignInView(session).render();
      });
    }

    var initialize = function() {
      getCurrentUser(setRouter);
    }

    return {
      initialize: initialize
    }
  });