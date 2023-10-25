"use strict";
//1
let titleColor = document.getElementById("headerTwo");
titleColor.style.backgroundColor = "blue";
//2
let section = document.getElementsByTagName("section")[0];
let parentElem = section.firstChild;
console.log(parentElem)
//3
let listItem = document.querySelector(`li:nth-child(5)`);
listItem.style.color = "red";
//4
let elementWithClass = document.getElementsByClassName("hatredLevelBlock");
elementWithClass[0].style.fontSize = "36px";