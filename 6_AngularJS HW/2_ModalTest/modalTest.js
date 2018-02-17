var model = [{
    q: 'Выберите директиву, которую можно использовать для двунаправленной привязки.<br> ',
    a1: 'ng-model-template',
    a2: 'ng-template',
    a3: 'ng-bind',
    a4: 'ng-model !',
    v: '4',
    id: '1'
  },
  {
    q: 'На странице размещено три блока текста, необходимо в зависимости от действия пользователя отображать один из этих блоков. С помощью какой директивы можно решить подобную задачу?',
    a1: 'ng-switch!',
    a2: 'ng-if',
    a3: 'ng-options',
    a4: 'ng-class',
    v: '1',
    id: '2'
  },
  {
    q: 'Какая из директив использует AJAX запрос на сервер ?<br> ',
    a1: 'ng-switch',
    a2: 'ng-include!',
    a3: 'ng-ajax',
    a4: 'ng-repeat',
    v: '2',
    id: '3'
  },
  {
    q: 'На странице необходимо создать список на основе данных массива, какая директива позволяет выполнить данную задачу?',
    a1: 'ng-list',
    a2: 'ng-repeat!',
    a3: 'ng-foreach',
    a4: 'ng-switch',
    v: '2',
    id: '4'
  },
  {
    q: 'Для того чтобы отменить привязку используется директива<br> ',
    a1: 'ng-no-model',
    a2: 'ng-cancel-bind',
    a3: 'ng-non-bindable!',
    a4: 'ng-cancel-model',
    v: '3',
    id: '5'
  }
];
var testApp = angular.module('testApp', []).controller('testCtrl', function ($scope) {

  $scope.questions = model;
  $scope.url = '';

  $scope.check = [];
  $scope.checkAll = function (i) {
    if ($scope.q.v === i) {
      $scope.check.push($scope.q.id);
      console.log(i);
      console.log($scope.q.id);
    }

  };



  $scope.showList = function (i) {
    $scope.q = $scope.questions[i];
    $scope.url = 'page.html';

  };

});