const inputTodo = document.getElementById('inputTodo') as HTMLInputElement;
const todoList = document.getElementById('todoList') as HTMLInputElement;
const addButton = document.getElementById("addButton") as HTMLInputElement;
const editButton = document.getElementById("editButton") as HTMLInputElement;

const taskInfo = document.getElementById('taskInfo') as HTMLInputElement;
const firstText = taskInfo.innerHTML;

let editTodoIndex: number = -1;

function addTodo(){
    const li = document.createElement('li');
    const todo = inputTodo.value;
    if(!todo){
        return;
    }
    inputTodo.value = "";

    li.innerHTML = '<input type="checkbox"><span id="content">' + todo + '</span><button></button><button></button>';
    todoList.appendChild(li);
    taskCount();

    const checkbox = li.getElementsByTagName('input')[0];
    checkbox.addEventListener('change', function(event) {
        taskCount();
    });

    const editButton = li.getElementsByTagName('button')[0] as HTMLInputElement;
    editButton.innerHTML = "編集"
    editButton.addEventListener('click', function(event) {
        Array.from(todoList.children).forEach((value, index) => {
            if(value === li) editTodoIndex = index;
        });
        toEdit();
    });

    const deleteButton = li.getElementsByTagName('button')[1] as HTMLInputElement;
    deleteButton.innerHTML = "削除"
    deleteButton.addEventListener('click', function(event) {
        li.remove();
        taskCount();
        toAdd();
    });
}

function editTodo(){
    const todo = inputTodo.value;
    if(!todo){
        return;
    }
    todoList.children[editTodoIndex].querySelector("span")!.innerHTML = todo;
    inputTodo.value = "";
    toAdd();
}

function taskCount(){
    const allTaskCount = todoList.children.length;
    const endTaskCount = (() => {
        let count = 0;
        Array.from(todoList.children).forEach((value) => {
            if (value.getElementsByTagName('input')[0].checked) {
                count += 1;
            }
        });
        return count;
    })();
    taskInfo.innerHTML = allTaskCount ? `${allTaskCount}個中${endTaskCount}個完了`: firstText;
}

function toEdit(){
    addButton.style.display ="none";
    editButton.style.display ="inline";
}

function toAdd(){
    editTodoIndex = -1;
    addButton.style.display ="inline";
    editButton.style.display ="none";
}