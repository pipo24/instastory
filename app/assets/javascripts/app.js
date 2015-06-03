define([
  'jquery',
  'underscore',
  'backbone',
  'routers/router',
  'routers/storiesRouter',
  'routers/imagesRouter',
  'routers/usersRouter',
  'bourbon'
  ], function($, _, Backbone, Router, StoriesRouter, ImagesRouter, UsersRouter, bourbon){

    var initialize = function(){
      Router.initialize();
      StoriesRouter.initialize();
      ImagesRouter.initialize();
      UsersRouter.initialize();
      Backbone.history.start();
    }

    return {
      initialize: initialize
    };
  });
