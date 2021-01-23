var todoList=[];
var task = {}

function addTask(tasktitle , tasktype){
    task={
        taskTitle : tasktitle,
        tasktype : tasktype ,
        status:false
    }
    todoList.push(task)
}

function RemoveTask(index) {
    console.log(index)
    todoList.splice(index , 1);
    showTasks();
}
function completedTask(task) {
    console.log(task)
    task.status= true;
    showTasks();
}

function handleAction( x  , type ){
    if(type == 'remove') todoList.splice(x , 1);
    else if(type == 'completed') x.status= true;
    showTasks();
}
function showTasks(){
     document.querySelector('#allTasks').textContent="";
     todoList.forEach((task , index) =>{
        var div = document.createElement('div');
        var h2 = document.createElement('h2');
        var h4 = document.createElement('h4');
        var removeBtn = document.createElement('button');
        var completedBtn = document.createElement('button');
        removeBtn.textContent="Remove Task";
        completedBtn.textContent="Completed Task";
        removeBtn.classList.add('btn' , 'btn-primary');
        completedBtn.classList.add('btn' , 'btn-secondary');

        // task.appendChild(h2);
        h2.textContent = task.taskTitle;
        h4.textContent = task.tasktype;
        div.appendChild(h2);
        div.appendChild(h4);
        div.appendChild(removeBtn);
        div.appendChild(completedBtn);
        (task.status) ? div.classList.add("alert", "alert-success") : div.classList.add("alert", "alert-danger");
        document.querySelector('#allTasks').append(div)
        removeBtn.addEventListener('click' , function() {
            handleAction(index , 'remove');
            // RemoveTask(index)
            // console.log(index)
            // todoList.splice(index , 1)
            // console.table(todoList)

        })
        completedBtn.addEventListener('click' , function() {
            handleAction(task , 'completed')
            // completedTask(task)
        })
    })
}




var form = document.querySelector("#form");

form.addEventListener('submit' , function(e){
    e.preventDefault();
    console.log(e)
    console.log(e.target.elements.tasktitle.value);
    addTask(e.target.elements.tasktitle.value , e.target.elements.tasktype.value );
    console.table(todoList)
    showTasks();
})