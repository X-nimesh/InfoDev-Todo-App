
let taskAdd = () => {
    let task = document.getElementById('create-task');
    console.log(task.value);

    // retrieving the latest task id
    let taskList = document.getElementById('taskList');
    let id = taskList.childNodes.length - 2;

    // creating element 
    let div = document.createElement('div');
    div.classList.add('task', 'new-task');
    div.id = id;

    let p = document.createElement('p');
    p.innerHTML = task.value;
    p.className = 'task-descip';
    div.appendChild(p);

    let innerDiv = document.createElement('div');
    innerDiv.className = 'buttons';

    let editButton = document.createElement('button');
    editButton.className = 'editButton';
    editButton.innerHTML = 'Edit';
    innerDiv.appendChild(editButton);

    let deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.innerHTML = 'Delete';
    innerDiv.appendChild(deleteButton)

    div.appendChild(innerDiv);
    taskList.appendChild(div);

}

document.getElementById("submit-Task").addEventListener("click", taskAdd);


