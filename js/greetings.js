const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 표기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // preventDefault를 호출하면 브라우저의 기본동작을 막아줌
  event.preventDefault();
  // hidden이라는 class name을 줘서 form 숨김
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 입력받은 input 값을 username(변수)에 저장
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  // username을 h1에 텍스트 추가
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage 정보 유무 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // submit 감지(submit event)
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the grretings
  paintGreetings(savedUsername);
}
