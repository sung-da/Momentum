const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); 위와 동일
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// newTodo를 저장할 array 생성
const toDos = [];

// toDos array의 내용을 localStorage에 저장
function saveToDos() {
  // localStorage에 array는 저장할 수 없음. 오직 텍스트만 저장 가능
  // 그러므로 array가 string의 형태로 localStorage에 들어가야 함
  // JSON.stringify는 object나 array 등 어떤것이든 string으로 바꿔줌
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// x버튼 누르면 list에서 삭제
function deleteToDo(event) {
  // console.log("event");
  // console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
}

// list(li)를 만들어서 HTML의 ul에 추가
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  // append는 맨 마지막
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// submit하면 새로고침되는 것을 막고 input의 value 복사 및 비우기
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  toDos.push(newTodo); // toDos array에 newTodo push
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

// localStorage에 저장된 todos 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  // string으로 된 savedTodos를 JavaScript object로 바꿔줌
  const parsedToDos = JSON.parse(savedToDos);
  // forEach는 array의 각 item에 대해 function을 실행
  // parsedToDos.forEach(sayHello);
  // 아래의 것(화살표 함수(arrow function))과 위의 것은 같은 내용임
  parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}
