angular.module('formApp', []).controller('defaultCtrl', function ($scope) {
  $scope.addNewUser = function (userDetails) {
    $scope.message = userDetails.name + ' (' + userDetails.email + ')';
  };
  $scope.message = 'Заполните все поля';
});