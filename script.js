const inputBox = document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
const myModel =document.getElementById("mymodel");
const confirmbtn =document.getElementById("confirmbtn");
const cancelbtn =document.getElementById("cancelbtn");
let targetElement = null;

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
        saveTask();
    }
else{
    let li =document.createElement("li");
    li.innerHTML =inputBox.value;
    listContainer.appendChild(li);
    let span =document.createElement("span");
    span.innerHTML ="\u00d7";
    li.appendChild(span);
    saveTask();
}
inputBox.value =""
}

inputBox.addEventListener("keypress",function(event){
    if(event.key ==="Enter"){
        addTask();
    }
})

listContainer.addEventListener("click" ,function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        targetElement= e.target.parentElement;
        myModel.style.display ="flex";
    }saveTask();
},false);

confirmbtn.addEventListener("click",function(){
        if(targetElement){
            targetElement.remove();
            targetElement=null;
            myModel.style.display ="none";
        }

}

);

cancelbtn.addEventListener("click", function(){
  targetElement =null;
  myModel.style.display ="none";
});

window.addEventListener("click",function(event){
    if(event.target ==myModel){
        targetElement =null;
        myModel.style.display ="none";
    }
});

function saveTask(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML =localStorage.getItem("data")
}
showTask();