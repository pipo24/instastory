define([
  'backbone',
  'views/images/index',
  'views/images/show',
  'views/images/form'
  ], function(Backbone, ImagesIndexView, ImagesShowView, ImagesFormView){

    var ImagesRouter = Backbone.Router.extend({
      routes: {
        'images'         : 'index',
        // 'images/new'     : 'new', //DONT NEED - IMG CREATED FROM STORY
        'images/:id'     : 'show',
        'images/:id/edit': 'edit',
      }
    });

    var initialize = function() {

      var router = new ImagesRouter;

      router.on('route:index', function(){
        new ImagesIndexView();
      });

      // router.on('route:new', function(){
      //   new ImagesFormView();
      // });

      router.on('route:show', function(id){
        new ImagesShowView(id)
      });

      router.on('route:edit', function(id){
        new ImagesFormView(id);
      });
    }

    return {
      initialize: initialize
    }
  });