const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// "img/0.jpg" 형태로 만들기
// document.createElement() 메서드는 지정한 tagName의 HTML 요소를 만들어 반환
const bgImage = document.createElement("img"); // img라는 element생성

// <img src = "img/0.jpg">
bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

// appendchild는 가장 뒤에, prepend는 가장 위에 추가
// document.body.appendChild(bgImage);
document.body.prepend(bgImage);
