"use strict";

const plusButton = document.querySelector(".plus");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

plusButton.addEventListener("click", () => {
    // console.log('hi')
    let p = document.createElement("p");
    let text = document.createTextNode(input.value);
    let trash = document.createElement("button");
    let trashIcon = document.createElement("i")
    trashIcon.className = "far fa-trash-alt"
    trash.innerHTML = trashIcon
    p.appendChild(text);
    p.appendChild(trash);
    list.appendChild(p);
});

// const newList = () => {
//     console.log(input.value)
// }