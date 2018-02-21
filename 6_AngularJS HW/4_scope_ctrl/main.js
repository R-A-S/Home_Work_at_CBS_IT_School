$(function () {
  $('#group1').buttonset();
  $('#radio1, #radio2, #radio3').checkboxradio({
    icon: false
  });

  $('#radio1').button().click(function (e) {
    angular
      .element(angularRegion)
      .scope()
      .$apply('addUser()');
  });
  $('#radio1').button().click(function (e) {
    angular
      .element(angularRegion)
      .scope()
      .$apply('delUser()');
  });
  $('#radio1').button().click(function (e) {
    angular
      .element(angularRegion)
      .scope()
      .$apply('editUser()');
  });
});
var model = [{
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
angular.module('formApp', []).controller('mainCtrl', function ($scope) {
  $scope.users = model;
  $scope.addUser = function () {
    $scope.users.push({
      name: $scope.newName,
      surname: $scope.newSurname
    });
  };
  $scope.delUser = function () {
    $scope.users;
  };
  $scope.editUser = function () {};
});