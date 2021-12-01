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
console.log(title);
*/