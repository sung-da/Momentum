const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input"); 위와 동일
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// newTodo를 저장할 array 생성(let을 써서 업데이트 가능하게 함)
let toDos = [];

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
  // filter는 값이 false인 것을 제외하고 true인 것으로만 새로운 array에 저장
  // 클릭한 li.id와 다른 toDo만 남겨둠
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// list(li)를 만들어서 HTML의 ul에 추가
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  // newTodo를 object 형태로 만듦
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // toDos array에 newTodoObj push
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// localStorage에 저장된 todos 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if (savedToDos !== null) {
  // string으로 된 savedTodos를 JavaScript object로 바꿔줌
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // forEach는 array의 각 item에 대해 function을 실행
  parsedToDos.forEach(paintToDo);
}
