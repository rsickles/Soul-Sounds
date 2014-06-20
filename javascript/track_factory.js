angular.module('myServiceModuleDI', []).factory('download_tracks', function() {

  return SC.get('/tracks', { tags: 'trap', limit: 5 }, function(tracks) {
    // $scope.$apply(function() {
    //   //
    // });
        console.log(tracks);
  });
  });