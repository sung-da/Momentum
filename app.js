const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  // const username = loginInput.value;
  event.preventDefault();
  // preventDefault를 호출하면 브라우저의 기본동작을 막아줌
  console.log(loginInput.value);
}

// submit 감지(submit event)
loginForm.addEventListener("submit", onLoginSubmit);
