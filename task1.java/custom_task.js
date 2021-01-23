tasks=['tasktitle','tasktype','taskContent']
task=[]
//show&hidden form
document.querySelector('#showHide').addEventListener('click', function(e){
    this.textContent == "Add New Task"? this.textContent="hide Task":
    this.textContent="Add New Task";
    document.querySelector('#formSection').classList.toggle('d-none')
})

//create array of object to save data
addTaskToForm=document.querySelector('#addtask')
addTaskToForm.addEventListener("submit",function(e){
    e.preventDefault()
    let data=this.elements
    let form={}
    tasks.forEach(key => {
        form[key]=data[key].value
    });
    // form = {
    //     taskTitle:data.tasktitle.value,
    //     taskCategory:data.tasktype.value,
    //     taskContent:data.taskContent.value
    // }
     task.push(form)
    addTaskToForm.reset()
    console.log(task)
    showTasks()
})

//function of showData in div
taskCreate=document.querySelector("#allTasks")
let showTasks=function(){
    task.forEach((t)=>{
        console.log(task)
        div=document.createElement('div')
        taskCreate.appendChild(div)
        
         h1=document.createElement('h1')
         h1.innerHTML=t['tasktitle']
         div.appendChild(h1)
         
         console.log(h1)

         h4=document.createElement('h4')
         h4.textContent=t['tasktype']
         taskCreate.appendChild(h4)
    })   
}
showTasks()
