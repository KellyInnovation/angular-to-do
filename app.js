'use strict';

function MainController() {
    const ctrl = this;
    ctrl.allTasks = [];
    ctrl.newTask = '';
    ctrl.order = '-time';
    ctrl.editMode = false;
    ctrl.currentEdit = {};

    function addTask() {
    	const existingItem = R.find((item) => ctrl.newTask === item.value)(ctrl.allTasks);

        if(existingItem) {
            existingItem.time = Date.now();
        } else {
            ctrl.allTasks.push({
	    		value: ctrl.newTask,
	    		time: Date.now(),
	    		complete: false
    		});
        }
    	
    	ctrl.newTask = '';
    }

    function deleteTask(task) {
    	var index = ctrl.allTasks.indexOf(task);
    	ctrl.allTasks.splice(index, 1);
    }

    function completeTask(task) {
    	task.complete = true;
    }


    function cancelEdit() {
    	ctrl.editMode = false;
    	ctrl.newTask = '';
    }

    function updateTask() {
    	ctrl.currentEdit.value = ctrl.newTask;
    	cancelEdit();
    }

    function editTask(task) {
    	ctrl.editMode = true;
    	ctrl.newTask = task.value;
    	ctrl.currentEdit = task;
    }

    function setOrder(order) {
    	if (ctrl.order === order) {
    		ctrl.order = '-'+order;	
    	}
    	else {
    		ctrl.order = order;
    	}
    }

    ctrl.addTask = addTask;
    ctrl.deleteTask = deleteTask;
    ctrl.completeTask = completeTask;
    ctrl.editTask = editTask;
    ctrl.setOrder = setOrder;
    ctrl.cancelEdit = cancelEdit;
    ctrl.updateTask = updateTask;

}

angular.module('app', [])
    .controller('MainCtrl', MainController);