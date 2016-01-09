angular.module('sappyAppy')
  .service('canvasSvc', function() {
    this.getCanvasSvc = function() {
      var canvasSvc = 'canvasSvc is also working';
      console.log('canvasSvc is logging');
      return canvasSvc;
    };
  });
