angular.module('myServiceModuleDI', []).factory('download_tracks', function() {

   SC.get('/tracks', { tags: 'trap', limit: 5 }, function(tracks) {
    // $scope.$apply(function() {
    //   //
    // });
      return tracks;
  });
  });