"use strict";
//1
let titleColor = document.getElementById("headerTwo");
titleColor.style.backgroundColor = "blue";
//2
let borderInSection = document.querySelector("section > h2");
borderInSection.style.border = "2px solid black";
//3
let listItem = document.querySelectorAll("li");
listItem.forEach((item) => {
  if (item.innerText === "Пункт 5") {
    item.style.color = "red";
  }
});
//4
let elementWithClass = document.getElementsByClassName("hatredLevelBlock");
elementWithClass[0].style.fontSize = "36px";