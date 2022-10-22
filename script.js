
let taskAdd = () => {
    let task = document.getElementById('create-task');
    console.log(task.value);
    // constnewdiv = document.createElement('div');

    let descrip = document.createElement("li");
    let text = document.createTextNode(task.value);
    descrip.appendChild(text);
    document.getElementById("taskList").appendChild(descrip);
    // taskCheck.setAttribute('type', 'checkbox');
}


// document.getElementById("create-task").addEventListener("change", taskAdd);
document.getElementById("submit-Task").addEventListener("click", taskAdd);
