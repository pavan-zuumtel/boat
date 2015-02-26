app.service('postService', ['$http', function($http) {
  var url = 'http://192.168.1.185';

  this.post = function(speed) {
    $http({
      method: 'Post',
      url: url,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj) {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
        return str.join('&');
      },
      data: {
        __SL_P_USP: speed
      }
    }).success(function() {
      console.log('sent the http request to the device at ', url);
    });
  };
}]);
