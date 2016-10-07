'use strict';

function MainController() {
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

    function deleteTask(task) {
    	ctrl.allTasks.splice(task.index, 1);
    }

    function completeTask(task) {
    	ctrl.allTasks.complete = true;
    }

    function editTask(index, value) {
    	ctrl.newTask = value;
    	ctrl.editClicked = false;
    }

    ctrl.addTask = addTask;
    ctrl.deleteTask = deleteTask;
    ctrl.completeTask = completeTask;
    ctrl.editTask = editTask;

}

angular.module('app', [])
    .controller('MainCtrl', MainController);