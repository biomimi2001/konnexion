

let setupBtn = document.getElementById("setupBtn");
let setupContent = document.getElementById("setupContent");
setupBtn.addEventListener("click", () => {
  if(getComputedStyle(setupContent).display != "block"){
    setupContent.style.display = "block"; }
     else {
      setupContent.style.display = "none";
  }
})

let dashbtn = document.getElementById("dashbtn");
let dashcontent = document.getElementById("dashcontent");
dashbtn.addEventListener("click", () => {
  if(getComputedStyle(dashcontent).display != "block"){
    dashcontent.style.display = "block"; }
     else {
    dashcontent.style.display = "none";
  }
})

let calendarBtn = document.getElementById("calendarBtn");
let calendarContent = document.getElementById("calendarContent");
calendarBtn.addEventListener("click", () => {
  if(getComputedStyle(calendarContent).display != "block"){
    calendarContent.style.display = "block"; }
     else {
      calendarContent.style.display = "none";
  }
})

let GanttBtn = document.getElementById("GanttBtn");
let GanttContent = document.getElementById("GanttContent");
GanttBtn.addEventListener("click", () => {
  if(getComputedStyle(GanttContent).display != "block"){
    GanttContent.style.display = "block"; }
     else {
      GanttContent.style.display = "none";
  }
})

let clientBtn = document.getElementById("clientBtn");
let clientContent = document.getElementById("clientContent");
clientBtn.addEventListener("click", () => {
  if(getComputedStyle(clientContent).display != "block"){
    clientContent.style.display = "block";
   }
     else {
      clientContent.style.display = "none";
  }
})

let gestionBtn = document.getElementById("gestionBtn");
let gestionContent = document.getElementById("gestionContent");
gestionBtn.addEventListener("click", () => {
  if(getComputedStyle(gestionContent).display != "block"){
    gestionContent.style.display = "block";
   }
     else {
       gestionContent.style.display = "none";
  }
})



let stockBtn = document.getElementById("stockBtn");
let stockContent = document.getElementById("stockContent");
stockBtn.addEventListener("click", () => {
  if(getComputedStyle(stockContent).display != "block"){
    stockContent.style.display = "block";
   }
     else {
      stockContent.style.display = "none";
  }
})


let coordinationBtn = document.getElementById("coordinationBtn");
let coordinationContent = document.getElementById("coordinationContent");
coordinationBtn.addEventListener("click", () => {
  if(getComputedStyle(coordinationContent).display != "block"){
    coordinationContent.style.display = "block";
   }
     else {
      coordinationContent.style.display = "none";
  }
})


let ressourceBtn = document.getElementById("ressourceBtn");
let ressourceContent = document.getElementById("ressourceContent");
ressourceBtn.addEventListener("click", () => {
  if(getComputedStyle(ressourceContent).display != "block"){
    ressourceContent.style.display = "block";
   }
     else {
      ressourceContent.style.display = "none";
  }
})

let proj = document.getElementById("proj");
let projetContent = document.getElementById("projetContent");
proj.addEventListener("click", () => {
  if(getComputedStyle(projetContent).display != "block"){
    projetContent.style.display = "block";
   }
     else {
      projetContent.style.display = "none";
  }
})