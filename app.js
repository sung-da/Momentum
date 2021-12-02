/* #3.1
const title = document.getElementById("something");
// getElementById 함수를 통해 HTML에서 id로 element를 가져올 수 있음

title.innerText = "Got you!";
// HTML에서 element를 찾고 내용 가져오거나 수정가능
// Grap me -> Got you

console.log(title.id);
console.log(title.className);
*/

/* #3.2
//const hellos = document.getElementsByClassName("hello");

//console.log(hellos);
// hellos array로 들어있음

// const title = document.getElementsByTagName("h1");
// // getElementByTagName은 태그를 가져옴 -> anchor, div, section,button 등
// console.log(title);

const title = document.querySelector(".hello h1");
//const title = document.querySelectorAll(".hello h1");

// querySelector는 element를 css방식으로 검색할 수 있음
// h1이 여러개 있어도 첫번째 element만 가져옴
// querySelectorAll을 사용하면 여러개의 h1이 들어있는 array를 가져옴

title.innerText = "Hello";
title.style.color ="blue";
console.log(title);
*/

/* #3.3 ~ #3.5
// click event를 listen 하는 방법
const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick() {
  h1.style.color = "blue";
  h1.innerText = "Thank you!!";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
  h1.style.color = "green";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
  h1.style.color = "yellow";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOD");
}

// addEventListener -> 어떤 event를 listen하고 싶은지 명시하고
// 해당 event 발생시 함수를 실행(직접실행 X -> javascript에 function을 넘겨줌 -> js가 function 실행)

h1.addEventListener("click", handleTitleClick);
//h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
//h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);
//h1.onmouseleave = handleMouseLeave;

// document와 같이 window도 기본제공
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/

// #3.6
const h1 = document.querySelector("div.hello:first-child h1");

// style은 css에서 작업하는 것이 적합하고 animation에 적합한 도구는 javascript
// function handleTitleClick() {
//   //   console.log(h1.style.color);
//   //   h1.style.color = "blue";
//   //   console.log(h1.style.color);
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }
function handleTitleClick() {
  const clickedClass = "clicked sexy-font";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
