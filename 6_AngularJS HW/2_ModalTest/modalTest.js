var model = [{
  q: 'Выберите директиву, которую можно использовать для двунаправленной привязки. ',
  a1: 'ng-model-template',
  a2: 'ng-template',
  a3: 'ng-bind',
  a4: 'ng-model ',
  v: '4',
  id: '1',
  disabled: false
},
{
  q: 'На странице размещено три блока текста, необходимо в зависимости от действия пользователя отображать один из этих блоков. С помощью какой директивы можно решить подобную задачу?',
  a1: 'ng-switch',
  a2: 'ng-if',
  a3: 'ng-options',
  a4: 'ng-class',
  v: '1',
  id: '2',
  disabled: false
},
{
  q: 'Какая из директив использует AJAX запрос на сервер ? ',
  a1: 'ng-switch',
  a2: 'ng-include',
  a3: 'ng-ajax',
  a4: 'ng-repeat',
  v: '2',
  id: '3',
  disabled: false
},
{
  q: 'На странице необходимо создать список на основе данных массива, какая директива позволяет выполнить данную задачу?',
  a1: 'ng-list',
  a2: 'ng-repeat',
  a3: 'ng-foreach',
  a4: 'ng-switch',
  v: '2',
  id: '4',
  disabled: false
},
{
  q: 'Для того чтобы отменить привязку используется директива ',
  a1: 'ng-no-model',
  a2: 'ng-cancel-bind',
  a3: 'ng-non-bindable',
  a4: 'ng-cancel-model',
  v: '3',
  id: '5',
  disabled: false
}
];

var testApp = angular
  .module('testApp', [])
  .controller('testCtrl', function ($scope, $window) {
    $scope.questions = model;
    $scope.url = '';

    $scope.checkQ = [];
    $scope.checked = false;
    $scope.radio = false;
    $scope.disabled = false;
    $scope.check = false;
    $scope.count = 0;

    $scope.checkAll = function (i) {
      if ($scope.q.v === i) {
        $scope.checkQ.push($scope.q.id);
        $scope.count++;
        console.log(i);
        console.log($scope.q.id);
      }
      $scope.disabled = true;

    };

    $scope.showList = function (i) {
      $scope.disabled = false;
      $scope.q = $scope.questions[i];
      $scope.questions[i].disabled = true;
      $scope.url = 'page.html';
      $scope.checked = function () {
        return false;
      };
    };

    $scope.result = function (i) {
      $scope.url = 'result.html';
      $scope.ans = $scope.checkQ.join(' ,');
    };

    $scope.reload = function () {
      
      $window.location.reload();
      
    };
  });