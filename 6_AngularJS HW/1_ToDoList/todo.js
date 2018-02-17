var model = {
  tasks: []
};
if (localStorage.userTasks) {
  model.tasks = angular.fromJson(localStorage.userTasks);
}

var taskListApp = angular
  .module('taskListApp', [])
  .controller('taskListCtrl', function($scope) {
    $scope.data = model;
    $scope.date = new Date();

    $scope.addNewTask = function() {
      $scope.data.tasks.push({
        name: $scope.taskName,
        done: false,
        date: $scope.taskDate,
        time: $scope.taskTime,
        description: $scope.taskDescription
      });
      localStorage.userTasks = angular.toJson($scope.data.tasks);
    };

    $scope.showText = function(done) {
      localStorage.userTasks = angular.toJson($scope.data.tasks);
      return done ? 'Да' : 'Нет';
    };

    $scope.setStyle = function(done) {
      return done ? 'color:green' : 'color:red; font-weight: bold';
    };
  });
