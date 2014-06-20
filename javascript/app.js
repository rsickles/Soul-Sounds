SC.initialize({
    client_id: "3d50ebd038e6bb2d9ad7bbc75f313431"
    //redirect_uri: "https://ryansickles.com/index.html" //can be a later option to authenticate and login to add tracks to a playlist
  });



var ssApp = angular.module('SS', []);



ssApp.controller('SoundsListCtrl', ['download_tracks', function (download_tracks) {
  $scope.tracks = function() {
      download_tracks();
    };
}]);



