'use strict';

function MainController($timeout) {
    const ctrl = this;
    ctrl.allTasks = [];
    ctrl.newTask = '';

    function addTask() {
    	ctrl.allTasks.push(ctrl.newTask);
    	ctrl.newTask = '';
    }

    function deleteTask(index) {
    	ctrl.allTasks.splice(index, 1);
    }

    ctrl.addTask = addTask;
    ctrl.deleteTask = deleteTask;

}

angular.module('app', [])
    .controller('MainCtrl', MainController);