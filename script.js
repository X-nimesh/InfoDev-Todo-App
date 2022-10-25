
(() => {
    console.log(localStorage.key(0));
    for (let i = 0; i < localStorage.length; i++) {
        // console.log(localStorage[i]);
        let taskId = localStorage.key(i);
        let taskValue = localStorage.getItem(taskId);
        let div = document.createElement('div');
        div.classList.add('task', 'new-task');
        div.id = taskId;

        let p = document.createElement('p');
        p.innerHTML = taskValue;
        p.className = 'task-descip';
        p.id = `taskDescrip-${taskId}`;
        div.appendChild(p);

        let innerDiv = document.createElement('div');
        innerDiv.className = 'buttons';

        let editButton = document.createElement('button');
        editButton.className = 'editButton';
        editButton.innerHTML = 'Edit';
        editButton.name = taskId;
        editButton.setAttribute("onclick", "editTask(event)");
        innerDiv.appendChild(editButton);

        let deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerHTML = 'Delete';
        deleteButton.id = taskId;

        deleteButton.setAttribute("onclick", "deleteTask(event)");
        innerDiv.appendChild(deleteButton)

        div.appendChild(innerDiv);
        taskList.appendChild(div);
    }
})();

let taskAdd = () => {
    let task = document.getElementById('create-task');
    console.log(task.value);
    if (task.value === '') {
        return;
    }
    // retrieving the latest task id
    let taskList = document.getElementById('taskList');
    let taskCount = taskList.childElementCount - 1;
    let taskId;
    taskCount === -1 ?
        taskId = 0 :
        taskId = parseInt(taskList.children[taskCount].id) + 1;

    // creating element 
    let div = document.createElement('div');
    div.classList.add('task', 'new-task');
    div.id = taskId;

    let p = document.createElement('p');
    p.innerHTML = task.value;
    p.className = 'task-descip';
    p.id = `taskDescrip-${taskId}`;
    div.appendChild(p);

    let innerDiv = document.createElement('div');
    innerDiv.className = 'buttons';

    let editButton = document.createElement('button');
    editButton.className = 'editButton';
    editButton.innerHTML = 'Edit';
    editButton.name = taskId;
    editButton.setAttribute("onclick", "editTask(event)");
    innerDiv.appendChild(editButton);

    let deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.innerHTML = 'Delete';
    deleteButton.id = taskId;

    deleteButton.setAttribute("onclick", "deleteTask(event)");
    innerDiv.appendChild(deleteButton)

    div.appendChild(innerDiv);
    taskList.appendChild(div);
    localStorage.setItem(taskId, task.value);

}
let deleteTask = (event) => {
    if (confirm('Are you sure you want to delete the task?')) {
        console.log(event.target.id);
        let taskId = event.target.id;
        document.getElementById(taskId).remove();
        localStorage.removeItem(taskId);
    }
}

let editTask = (event) => {
    console.log(event.target.name);
    let taskId = event.target.name;
    let divEdit = document.createElement('div');
    divEdit.className = 'editInput';
    divEdit.id = `edit-${taskId}`;

    let input = document.createElement('input');
    input.type = 'text';
    input.id = `editDes-${taskId}`;
    console.log(document.getElementById(`taskDescrip-${taskId}`));
    input.defaultValue = document.getElementById(`taskDescrip-${taskId}`).innerText;
    divEdit.appendChild(input);
    let buttonGroup = document.createElement('div');
    buttonGroup.className = 'buttons';

    let saveButton = document.createElement('button');
    saveButton.className = 'saveButton';
    saveButton.innerHTML = 'Save';
    saveButton.name = taskId;
    saveButton.setAttribute("onclick", "saveTask(event)");

    let cancelButton = document.createElement('button');
    cancelButton.className = 'cancelButton';
    cancelButton.innerHTML = 'Cancel';
    cancelButton.name = taskId;
    cancelButton.setAttribute("onclick", "cancelTask(event)");

    buttonGroup.appendChild(saveButton);
    buttonGroup.appendChild(cancelButton);

    divEdit.appendChild(buttonGroup);

    document.getElementById(taskId).prepend(divEdit);
}
let saveTask = (event) => {
    console.log(event.target.name);
    let taskId = event.target.name;
    let newDescrip = document.getElementById(`editDes-${taskId}`).value;
    let taskDescrip = document.getElementById(`taskDescrip-${taskId}`);
    taskDescrip.innerHTML = newDescrip;
    console.log(taskDescrip.innerText);
    let editDiv = document.getElementById(`edit-${taskId}`);
    editDiv.remove();
    localStorage.setItem(taskId, newDescrip);
}
let cancelTask = (event) => {
    // console.log(event.target.name);
    let taskId = event.target.name;
    document.getElementById(`edit-${taskId}`).remove();
}

document.getElementById("submit-Task").addEventListener("click", taskAdd);



