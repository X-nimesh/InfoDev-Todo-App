
let taskAdd = () => {
    let task = document.getElementById('create-task');
    console.log(task.value);

}


// document.getElementById("create-task").addEventListener("change", taskAdd);
document.getElementById("submit-Task").addEventListener("click", taskAdd);
