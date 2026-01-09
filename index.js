
const taskList = [];

renderTaskList();

function renderTaskList(){

let taskListHTML = '';

for(let i = 0; i < taskList.length; i++){
  const taskObject = taskList[i];
  const {name, dueDate} = taskObject;

  const html = ` 
               <div> ${name} </div>
                <div> ${dueDate} </div>
                <button onclick = "taskList.splice(${i}, 1); renderTaskList();" class= "delete-btn"> Delete </button>
                 `

  taskListHTML += html;
}

document.querySelector('.display-task').innerHTML = taskListHTML;

}

function addTask(){
  const inputElement = document.querySelector('.js-input-task');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.due-date-input');
  const dueDate = dateInputElement.value;
  
  taskList.push({name, dueDate});

  inputElement.value = '';

  renderTaskList();
}
