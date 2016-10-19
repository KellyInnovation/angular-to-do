'use strict';

function MainController() {
    const ctrl = this;
    ctrl.allLists = [];
    ctrl.newList = '';
    ctrl.newListClicked = true;
    ctrl.allTasks = [];

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
	    		time: Date.now(),
	    		order: '-time',
	    		radioShow: '',
	    		tasks: [],
    		});
        }
    	
    	ctrl.newList = '';
    	ctrl.newListClicked = false;
    }

    function newListForm () {
    	ctrl.newListClicked = true;
    }

    function addTask(list) {
    	const existingItem = R.find((item) => list.newTask === item.value)(list);

        if(existingItem) {
            existingItem.time = Date.now();
        } else {
            list.tasks.push({
	    		value: list.newTask,
	    		list_title: list.title,
	    		time: Date.now(),
	    		complete: false
    		});
        }
    	
    	list.newTask = '';

    }


    function deleteTask(task, list) {
    	var index = list.tasks.indexOf(task);
    	list.tasks.splice(index, 1);
    }

    function completeTask(task) {
    	task.complete = true;
    }


    function cancelEdit(list) {
    	list.editMode = false;
    	list.newTask = '';
    }

    function updateTask(list) {
    	list.currentEdit.value = list.newTask;
    	cancelEdit(list);
    }

    function editTask(task, list) {
    	list.editMode = true;
    	list.newTask = task.value;
    	list.currentEdit = task;
    }

    function setOrder(order, list) {
    	if (list.order === order) {
    		list.order = '-'+order;	
    	}
    	else {
    		list.order = order;
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

}

angular.module('app', [])
    .controller('MainCtrl', MainController);