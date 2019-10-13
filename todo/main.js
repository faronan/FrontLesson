"use strict";
var inputTodo = document.getElementById('inputTodo');
var todoList = document.getElementById('todoList');
var addButton = document.getElementById("addButton");
var editButton = document.getElementById("editButton");
var taskInfo = document.getElementById('taskInfo');
var firstText = taskInfo.innerHTML;
var editTodoIndex = -1;
function addTodo() {
    var li = document.createElement('li');
    var todo = inputTodo.value;
    if (!todo) {
        return;
    }
    inputTodo.value = "";
    li.innerHTML = '<input type="checkbox"><span id="content">' + todo + '</span><button></button><button></button>';
    todoList.appendChild(li);
    taskCount();
    var checkbox = li.getElementsByTagName('input')[0];
    checkbox.addEventListener('change', function (event) {
        taskCount();
    });
    var editButton = li.getElementsByTagName('button')[0];
    editButton.innerHTML = "編集";
    editButton.addEventListener('click', function (event) {
        Array.from(todoList.children).forEach(function (value, index) {
            if (value === li)
                editTodoIndex = index;
        });
        toEdit();
    });
    var deleteButton = li.getElementsByTagName('button')[1];
    deleteButton.innerHTML = "削除";
    deleteButton.addEventListener('click', function (event) {
        li.remove();
        taskCount();
        toAdd();
    });
}
function editTodo() {
    var todo = inputTodo.value;
    if (!todo) {
        return;
    }
    todoList.children[editTodoIndex].querySelector("span").innerHTML = todo;
    inputTodo.value = "";
    toAdd();
}
function taskCount() {
    var allTaskCount = todoList.children.length;
    var endTaskCount = (function () {
        var count = 0;
        Array.from(todoList.children).forEach(function (value) {
            if (value.getElementsByTagName('input')[0].checked) {
                count += 1;
            }
        });
        return count;
    })();
    taskInfo.innerHTML = allTaskCount ? allTaskCount + "\u500B\u4E2D" + endTaskCount + "\u500B\u5B8C\u4E86" : firstText;
}
function toEdit() {
    addButton.style.display = "none";
    editButton.style.display = "inline";
}
function toAdd() {
    editTodoIndex = -1;
    addButton.style.display = "inline";
    editButton.style.display = "none";
}
