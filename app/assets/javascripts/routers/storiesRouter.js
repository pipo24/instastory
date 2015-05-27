define([
  'backbone',
  'views/stories/index',
  'views/stories/show',
  'views/stories/form'
  ], function(Backbone, StoriesIndexView, StoriesShowView, StoriesFormView){

    var StoriesRouter = Backbone.Router.extend({
      routes: {
        'stories'         : 'index',
        'stories/new'     : 'new',
        'stories/:id'     : 'show',
        'stories/:id/edit': 'edit',
      }
    });

    var initialize = function() {
      var router = new StoriesRouter();
      router.on('route:index', function(){
        new StoriesIndexView();
      });

      router.on('route:new', function(){
        new StoriesFormView();
      });

      router.on('route:show', function(id){
        new StoriesShowView(id)
      });

      router.on('route:edit', function(id){
        new StoriesFormView(id);
      });
    }

    return {
      initialize: initialize
    }
  });