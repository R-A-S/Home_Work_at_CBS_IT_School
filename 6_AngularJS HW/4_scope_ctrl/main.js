$(function() {
  $('#group1').buttonset();
  $('#radio1, #radio2, #radio3').button({
    icon: false
  });

  $('#radio1').click(function() {
    angular.element(angularRegion).scope().$apply('showNewUser()');
  });
  $('#radio2').click(function() {
    angular.element(angularRegion).scope().$apply('deleteUser()');
  });
  $('#radio3').click(function() {
    angular.element(angularRegion).scope().$apply('editSomeUser()');
  });
});

var model = [
  {
    name: 'Петя',
    surname: 'Пяточкин'
  },
  {
    name: 'Жора',
    surname: 'Петрович'
  },
  {
    name: 'Василиса',
    surname: 'Примудрая'
  }
];

angular.module('formApp', []).controller('mainCtrl', function($scope) {
  $scope.users = model;
  $scope.delUsers = false;
  $scope.editUsers = false;
  $scope.showNewUsers = false;
  
  $scope.showNewUser = function() {
    $scope.showNewUsers = true;
    $scope.delUsers = false;
    $scope.editUsers = false;
  };

  $scope.deleteUser = function() {
    $scope.delUsers = true;
    $scope.showNewUsers = false;
    $scope.editUsers = false;
  };

  $scope.editSomeUser = function() {
    $scope.editUsers = true;
    $scope.showNewUsers = false;
    $scope.delUsers = false;
  };

  $scope.addUser = function() {
    $scope.users.push({
      name: $scope.newName,
      surname: $scope.newSurname
    });
  };

  $scope.delUser = function(i) {
    $scope.users.splice([i], 1);
  };

  $scope.editUser = function() {
    $scope.users.splice([i], 1);
  };
});
