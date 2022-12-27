let viewTasks=document.querySelector('.view-tasks')
viewTasks.addEventListener('click', myDropdown)
function myDropdown(){
       document.getElementById('myDropdown').classList.toggle("show");
       list=document.getElementById('the-list');
       list.innerHTML=""
       data.map((x,y)=>{
        return (
            list.innerHTML+=`<li id = ${y} class="list-element"><div id="taskcenter" onclick="checked();">${x}</div><img class="delete-icon"  width="20px" height="15px" src="delete-icon.png"  onclick = "deleteTask(this);"></li>`
        )
      });
       
   }
let data = JSON.parse(localStorage.getItem("data")) || [];
if(!data)localStorage.setItem("data", JSON.stringify(data));
  
var myTask=document.querySelector('input').value;
let addIcon=document.querySelector('#add-icon');
addIcon.addEventListener('click', addingIcon);
function addingIcon(){
  let myTask=document.querySelector('input').value;
  if (myTask===""){
     let noInput=document.querySelector('#no-input');
     setTimeout(function(){
      noInput.innerText="*No Input"
      noInput.style.color="red"
      noInput.style.fontsize="30px"
     },0)
     setTimeout(function(){
      noInput.innerText="";
     },1000)
  }else{
  let myTaskCapping=myTask.slice(0,1);
  let myTaskCaps=myTaskCapping.toUpperCase();
  
  let myTaskNormal=myTask.slice(1,100);
  let myTaskLower=myTaskNormal.toLowerCase();
  
   myTask= myTaskCaps+myTaskLower;
   let added= document.getElementById('no-input');
   setTimeout(function(){
   
   added.innerText="Task Successfully added!";
   added.style.color="black";
   },0);
   setTimeout(function(){
    
    added.innerText="";
   },1200);
   console.log(myTask);
   acceptData();
   document.querySelector("input").value="";

  }

}

let acceptData= function(){
  let list = document.getElementById('the-list');
  let inputValue = document.querySelector("input").value;

  let cutter = inputValue.slice(0,1);
  let upperCaseI = cutter.toUpperCase();
  
  let restOfIt = inputValue.slice(1,100);
  let lowerCaseI = restOfIt.toLowerCase();
  
  inputValue = upperCaseI+lowerCaseI;

  data.push(inputValue);
  localStorage.setItem("data", JSON.stringify(data));
  list.innerHTML="";
  data.map((x,y)=>{
    return (
        list.innerHTML+=`<li id = ${y} class="list-element"><div id="taskcenter" onclick = "checked();">${x}</div><img class="delete-icon" width="20px" height="15px" src="delete-icon.png" onclick = "deleteTask(this);"></li>`
    )
  });
}
let deleteTask = function(e){
  e.parentElement.remove();

  data.splice(e.parentElement.id, 1);

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
};
let checked = function(){
  
  let it = document.getElementById("taskcenter");
  it.style.textDecoration = "line-through";
  console.log("completed task");
  unchecked();
}
let unchecked = function(){
  console.log("another one")
}
// function createTask(){
//   let theList=document.getElementById('the-list');
//   let theTask=document.querySelector('input').value;

//   let theTaskUpperCasing=theTask.slice(0,1);
//   let theTaskUpperCase=theTaskUpperCasing.toUpperCase();

//   let theTaskNormalling=theTask.slice(1,1000);
//   let theTaskNormal=theTaskNormalling.toLowerCase();

//   theTask=theTaskUpperCase+theTaskNormal;
//   data.map((x)=>{
//     return(theList.innerHTML+=`<li>${x}</li>`)
//   })
  
// }



// function makeLine(length) {
//    let line = "";
//    for (let j = 1; j <= length; j++) {
//        line += "* ";
//    }
//    return line + "\n";
// }
// function buildTriangle(length){
//    let triangle="";
//    for(let i=1; i<=length; i++){
//       triangle += makeLine(i);
//    }
//    return triangle;
// }
// console.log(buildTriangle(10))f

// function emotions(myString, myFunc){
//      console.log(`${myString}, ${myFunc(9)}!`)
// }
// emotions("I am happy", function myFunc(num){
//    let sound="";
//    for(let i=0; i<=num; i++){
//       sound+="ha";
//    }
//    return sound;
// });

// let original = [1, 2, 3, 4, 5, 6]
// let next = original.map((x)=>x*3);
// console.log(next);
















































































































// let toDoItems= [];
// let addTasksIn= document.querySelector('#add-icon');
// addTasksIn.addEventListener('click', addTask);
// function addTask(){
//     let newTask=document.querySelector('#inp').value;
//     if(newTask!==""){
    
//     toDoItems.push(newTask);
//     console.log(toDoItems);
   

//     document.getElementById('the-list').innerHTML+=`<li class="exes">${newTask}<span class="close">${"x"}</span></li>`;
    
//     let noinput=document.getElementById('no-input');
//     setTimeout(function(){
//       noinput.style.padding="10px";
//       noinput.style.textAlign="left";
//       noinput.style.color="black"
//       noinput.innerText="You've added a new item!"
//     },0)
//     setTimeout(function(){
//       noinput.style.padding="10px";
//       noinput.innerText="";
//     },1000)
  
  
// }

    
//     else if(newTask===""){
//         let noinput=document.getElementById('no-input')
//         setTimeout(function(){
//           noinput.style.padding="10px";
//           noinput.style.textAlign="left";
//           noinput.style.color="yellow"
//           noinput.innerText="*No input"
//         },0)
//         setTimeout(function(){
//             noinput.style.padding="0px";
//             noinput.innerText="";
//         },600);
//     }

// }
// addTasksIn.addEventListener('click', clearInput);

// function clearInput(){
//     let newTask=document.querySelector('input')
//     newTask.value="";
// }

// let viewTasks=document.querySelector('.view-tasks')
// viewTasks.addEventListener('click', myDropdown)
// function myDropdown(){
//     document.getElementById('myDropdown').classList.toggle("show")
// }
// // window.onclick = function(event) {
// //     if (!event.target.matches('.dropbtn')) {
// //       var dropdowns = document.getElementsByClassName("dropdown-content");
// //       var i;
// //       for (i = 0; i < dropdowns.length; i++) {
// //         var openDropdown = dropdowns[i];
// //         if (openDropdown.classList.contains('show')) {
// //           openDropdown.classList.remove('show');
// //         }
// //       }
// //     }
// //   }