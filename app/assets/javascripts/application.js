require.config({
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    text: 'lib/text'
  }
});

require([
  'app',
], function(App){
  App.initialize();
});