'use strict';

function MainController() {
    const ctrl = this;
    ctrl.allLists = [];
    ctrl.newList = '';
    ctrl.newListClicked = false;
    ctrl.allTasks = [];
    ctrl.newTask = '';
    ctrl.order = '-time';
    ctrl.editMode = false;
    ctrl.currentEdit = {};
    ctrl.radioShow = '';

    function addList()  {
    	const existingList = R.find((item) => ctrl.newList === item.value)(ctrl.allLists);

        if(existingList) {
            existingList.time = Date.now();
        } else {
            ctrl.allLists.push({
	    		title: ctrl.newList,
	    		time: Date.now()
    		});
        }
    	
    	ctrl.newList = '';
    	ctrl.newListClicked = false;
    }

    function newListForm () {
    	ctrl.newListClicked = true;
    }

    function addTask(list) {
    	const existingItem = R.find((item) => ctrl.newTask === item.value)(ctrl.allTasks);

        if(existingItem) {
            existingItem.time = Date.now();
        } else {
            ctrl.allTasks.push({
	    		value: ctrl.newTask,
	    		list: list.title,
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

    function completeFilter(task) {
    	if (radioShow === 'all') {
    		 return (task.complete == true && task.complete == false)
    	}
    }

    ctrl.addList = addList;
    ctrl.newListForm = newListForm;
    ctrl.addTask = addTask;
    ctrl.deleteTask = deleteTask;
    ctrl.completeTask = completeTask;
    ctrl.editTask = editTask;
    ctrl.setOrder = setOrder;
    ctrl.cancelEdit = cancelEdit;
    ctrl.updateTask = updateTask;
    ctrl.completeFilter = completeFilter;

}

angular.module('app', [])
    .controller('MainCtrl', MainController);