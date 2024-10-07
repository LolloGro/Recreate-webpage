const listed = [];
let count = 0;

const completed = document.querySelector("#completed");
const taskToDo = document.querySelector("#taskToDo");
const addBtn = document.querySelector("#addBtn");
const noInput = document.querySelector("#noInput");
const list = document.querySelector("#list");

addBtn.addEventListener("click", function (){

let newInput = taskToDo.value;  
console.log(newInput); 

if (newInput.length == 0){
    noInput.innerText = "Input must not be empty";
    noInput.setAttribute("class", "blink")
    return;
}else{
    noInput.innerText=""; 
    noInput.setAttribute("class", ""); 
}

const toDo = document.createElement("div");
toDo.classList.add("theList"); 
list.appendChild(toDo);

const addList = document.createElement("li");
toDo.appendChild(addList); 

const newTask = document.createElement("span");
newTask.innerText = newInput;
addList.appendChild(newTask);

const deletBtn = document.createElement("button");
deletBtn.classList.add("delBtn");
deletBtn.innerHTML= '<img src="bin12.png" />'
addList.appendChild(deletBtn);  

 newTask.addEventListener("click", function(){
    if(newTask.getAttribute("class") == "mark"){
        count--;
        newTask.setAttribute("class", "");
    }else{
        count++;
        newTask.setAttribute("class", "mark")
    }
    completed.innerText = count + " completed";
 }); 

 deletBtn.addEventListener("click", function(){
    toDo.remove(); 
 });

    listed.push(newInput);
    console.log(listed); 

    taskToDo.value = ""; 

}); 

