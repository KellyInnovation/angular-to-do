'use strict';

function MainController() {
    const ctrl = this;
    ctrl.allTasks = [];
    ctrl.newTask = '';
    ctrl.editClicked = false;
    ctrl.editItem = '';

    function addTask() {
    	ctrl.allTasks.push({
    		value: ctrl.newTask,
    		time: Date.now(),
    		complete: false
    	});
    	ctrl.newTask = '';
    }

    function deleteTask(task) {
    	var index = ctrl.allTasks.indexOf(task);
    	ctrl.allTasks.splice(index, 1);
    }

    function completeTask(task) {
    	task.complete = true;
    }

    function editShow(task) {
    	var index = ctrl.allTasks.indexOf(task);
    	ctrl.editItem = task[index];
    	ctrl.editClicked = true;
    }

    function editTask(value) {
    	ctrl.newTask = value;
    	ctrl.editClicked = false;
    }

    ctrl.addTask = addTask;
    ctrl.deleteTask = deleteTask;
    ctrl.completeTask = completeTask;
    ctrl.editShow = editShow;
    ctrl.editTask = editTask;

}

angular.module('app', [])
    .controller('MainCtrl', MainController);