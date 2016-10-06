'use strict';

function MainController($timeout) {
    const ctrl = this;
    ctrl.allTasks = [];
    ctrl.newTask = '';
    ctrl.editClicked = false;

    function addTask() {
    	ctrl.allTasks.push({
    		value: ctrl.newTask,
    		time: Date.now(),
    		complete: false
    	});
    	ctrl.newTask = '';
    }

    function deleteTask(index) {
    	ctrl.allTasks.splice(index, 1);
    }

    function completeTask(task) {
    	ctrl.allTasks.complete = true;
    }

    function editTask(index, value) {
    	ctrl.newTask = value;
    }

    ctrl.addTask = addTask;
    ctrl.deleteTask = deleteTask;
    ctrl.completeTask = completeTask;
    ctrl.editTask = editTask;

}

angular.module('app', [])
    .controller('MainCtrl', MainController);