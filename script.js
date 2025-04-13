const todoList = JSON.parse(localStorage.getItem('todo')) || [];
let displayBox = document.getElementById("outputList");
let addBtn = document.getElementById("addBtn");
let btnLogo = document.getElementById("btnLogo");

addBtn.addEventListener("click", addList)
function addListInLocal() {
    localStorage.setItem('todo',
        JSON.stringify(todoList))
}
function getListFromLocal() {
    let todo = JSON.parse(localStorage.getItem('todo'));
    return todo;
}
function addList() {
    todoData = document.getElementById("inputData").value;

    if (todoData.length == 0) {

        return;
    }
    else if (todoList.includes(todoData)) {
        alert("List Already Exists");
        return;
    }
    else {
        console.error("else Working");

        todoList.push(todoData);
        document.getElementById("inputData").value = '';


        addListInLocal()
        printList()
    }


}
addListInLocal()
getListFromLocal()
function printList() {
    // console.info(todoList)
    displayBox.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const element = todoList[i];
        displayBox.innerHTML += `
        <li class="todoElement"> ${element}<span class="btnSection">
          <button onclick="updateList(${i})"><img src="/toDoList/sources/edit-4-svgrepo-com.svg" width="20px">
          </button>
          <button  onclick="deleteData(${i})"><img src="/toDoList/sources/trash-bin-icon.svg" width="20px" alt="">
          </button></span>
       </li>
        `;
    }


}
function deleteData(index) {
    todoList.splice(index, 1);
    addListInLocal()
    printList()

}
function updateList(index) {
    document.getElementById("inputData").value = todoList[index];
    addBtn.setAttribute("onclick", `updateSelectedItems(${index})`);
    
   


}
printList()
function updateSelectedItems(index) {
    newData = document.getElementById("inputData").value;

    addBtn.setAttribute("onclick", "addList")

    if (newData.length == 0) {
        alert("Please Enter Something");
        return;
    }
    else {
        // console.error("else Working");

        todoList[index] = newData;
        addListInLocal()
        document.getElementById("inputData").value = '';
        printList()

    }

}
// document.getElementById("inputData").addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         addList();
//     }

// });
// for light or dark mod
const checkbox = document.getElementById("checkbox");
const currentTheme = localStorage.getItem("theme");

// Apply the saved theme on page load
if (currentTheme === "dark") {
    document.body.classList.add("dark");
    checkbox.checked = true;
}

// Add event listener for theme toggle
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});
// for Get Time
let hourId = document.getElementById("hour");
let minId = document.getElementById("min");
let inAmPm = document.getElementById("isAm");
let dayId = document.getElementById("day");
let monthId = document.getElementById("month");
let yearId = document.getElementById("year");


function timeFnc() {
    
    
    // console.log(isAm);
    let now = new Date();

    let hours = () => {
        let hour = now.getHours();
        if (hour > 12) {
            return hour - 12 ;
        }
        else {
            return hour;
        }
    };
    // let hours=now.getHours();

    let minutes = now.getMinutes();
   
   

    hourId.innerText = `${fixDigits(hours())}`;
    minId.innerText = `${fixDigits(minutes)}`;
    
    // console.log(isAm);



}
timeFnc()

setInterval(
    timeFnc, 1000
)
//for get dat data
let now = new Date();
let day = now.getDate();
let month = now.getMonth() + 1;

let year = now.getFullYear()

// console.log(amPm());

function dateFun() {
    console.log(month);
    
    dayId.innerText = `${fixDigits(day)}`;
    monthId.innerText = `${fixDigits(month)}`;
    yearId.innerText = year;
   
}
dateFun()
setInterval(
    dateFun, 1000000
)

function fixDigits(number) {
    let len=number.toString().length;
  
//   console.log(len);
  
  if (len==1) {
    // console.info("if executed");

    return "0"+number;
  }
  else{
    // console.info("else executed");
    return number;
  }
}
// console.log(fixDigits(5));
//for timeInAmPm function
let amPmFun= ()=>{
    let amPm=()=>{
        let hour= now.getHours();
        if (hour<12) {
         return "Am";
        }
        else{
         return "Pm";
        }
     }
    inAmPm.innerText=amPm();
    // console.log(amPm());
    
}
amPmFun()
setInterval(
    amPmFun , 3600000
)