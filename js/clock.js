const clock = document.querySelector("h2#clock");

// interval은 '매번' 일어나야 하는 무언가..
function getClock() {
  const date = new Date();
  // padStart(), padEnd() String이 가져야하는 길이를 설정
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setTimeout(호출 할 function, 얼마나 기다릴지 ms)
// setTimeout(getClock, 5000);

// getClock() 먼저 호출하지 않으면 화면에 00:00:00로 나옴
getClock();
// setInterval(실행하고자 하는 function, 호출되는 function 간격 ms(milliseconds))
setInterval(getClock, 1000);
