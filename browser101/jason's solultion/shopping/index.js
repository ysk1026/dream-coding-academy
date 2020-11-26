"use strict";

const plusButton = document.querySelector(".plus");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

plusButton.addEventListener("click", addItem);

function enter() {
    if (window.event.keyCode === 13){
    addItem();
    }
};

function addItem() {
    let p = document.createElement("p"); // P tag 생성 변수
    let text = document.createTextNode(input.value); // input 안에 입력한 값 가져옴
    let trash = document.createElement("button"); // 버튼 생성 변수
    trash.innerHTML = '<i class="fas fa-trash"></i>'; // 버튼 안에 아이콘 추가
    trash.className = "trashButton" // 버튼에 클래스 추가
    p.appendChild(text); // p 태그에 text 추가
    p.appendChild(trash); // p 태그에 trash 추가
    trashButton.addEventListener("click", () => { // Trash 버튼에 삭제 기능 추가
        p.parentNode.removeChild(p)
    });
    list.appendChild(p);
}

/*
다 구현은 완료했는데 addItem 함수에 이렇게 다 몰아넣는게 효율적인지는 의문
개인적으로 trash 버튼에 delete 실행하는 함수를 따로 분류하고 싶었음
알고리즘 생각한거: trash 버튼을 클릭하면 e.target.parentNode 받아오고 그걸로 삭제하는 방법
*/ 