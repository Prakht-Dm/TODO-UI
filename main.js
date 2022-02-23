let id=5;

function createTask (event){ 
    event.preventDefault();
    let currentElement=this.firstElementChild;
    if(this.firstElementChild.value&&currentElement.value.split(" ").join("")!=""){  
let valueTask=currentElement.value;
let outTask = document.createElement('div');
outTask.className='row';
outTask.innerHTML=`<div class='activeTask'><div class="checkBox"><input type="checkbox" id="r${id}"><label for="r${id}"><span></span></label></div><p>${valueTask}</p><button class="cross2"></div>`;
this.after(outTask);
    }
    let crossButtons=document.querySelectorAll('.cross2');
    for (let k of crossButtons){
    k.addEventListener('click',  deleteTask);
    }
    let crossCheck=document.querySelectorAll('div.checkBox:first-child');
    for (let k of crossCheck){
    k.addEventListener('change',  changeBgColor);
    }
        
    currentElement.value='';
    id++;
}

function deleteTask(event){
    event.preventDefault();
this.parentNode.parentNode.remove();
}

function changeBgColor(){
 if (this.parentNode.parentElement.style.background) {this.parentNode.parentElement.style.background=""} else  {this.parentNode.parentElement.style.background="#F4F4F4";}
    
}
let crossButtons=document.querySelectorAll('.cross2');
for (let k of crossButtons){
k.addEventListener('click',  deleteTask);
}

let crossCheck=document.querySelectorAll('div.checkBox:first-child');
for (let k of crossCheck){
k.addEventListener('change',  changeBgColor);
}
formText.addEventListener('submit', createTask);
formText2.addEventListener('submit', createTask);








// const list = [];
// const STATUS_NAME = {
//     TODO: "To Do",
//     INPROGRESS: "In Progress",
//     DONE: "Done",
// }
// const PRIORITY_LIST={
//     HIGH: "High",
    
//     LOW: "Low",
// }
// function changeStatus(task,stat){
//     for (let i=0; i<list.length;i++){
//         if (list[i].name===task){
//         list[i].status=stat;
//         break;
//     } 
//  }
// }
// function addTask(Task){
//     list.push({name: Task,
//     status: STATUS_NAME.TODO,
//     priority: PRIORITY_LIST.MEDIUM,});
// }
// function deleteTask(task){
//        for (let i=0; i<list.length;i++){
//            if (list[i].name===task){
//            list.splice(i,1);
//            break;
//        }
//     }
// }
// function showList(){
//     let createTodo ="",
//     createInProgress ="",
//     createDone="";
//     for (let i=0;i<list.length;i++){
//         if (list[i].status===STATUS_NAME.TODO) {createTodo+=`${list[i].name}\n`;}
//         if (list[i].status===STATUS_NAME.INPROGRESS) createInProgress+=`${list[i].name}\n`;
//         if (list[i].status===STATUS_NAME.DONE) createDone+=`${list[i].name}\n`;
//     }
//     console.log(`Todo:\n${createTodo||`-`}\nIn Progress:\n${createInProgress||`-`}\nDone:\n${createDone||`-`}`)
// }
// addTask("Wake up");
// addTask("Have breakfast");
// addTask("Go to work");
// addTask("Make money");
// addTask("Learn Javascript");
// changeStatus("Wake up",STATUS_NAME.INPROGRESS);
// changeStatus("Have breakfast","Done");
// showList();
