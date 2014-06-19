SC.initialize({
    client_id: "3d50ebd038e6bb2d9ad7bbc75f313431"
    //redirect_uri: "https://ryansickles.com/index.html" //can be a later option to authenticate and login to add tracks to a playlist
  });
var ssApp = angular.module('SS', []);
ssApp.controller('SoundsListCtrl', function ($scope) {
  SC.get('/tracks', { tags: 'trap', limit: 5 }, function(tracks) {
    $scope.$apply(function() {
      $scope.tracks = tracks;
    });
    console.log($scope.tracks);
});
});



