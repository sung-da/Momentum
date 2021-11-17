/* #2.3 const and let
const a = 5;
const b = 2;
let myName = "sung";

// const는 상수로 바뀌지 않는 값
// let 은 새로 생성할 때만 사용

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "dada"; 

console.log("your name is " + myName);
 */

/* #2.4 Boolean
const amIFat = null;
let something;
console.log(amIFat);
console.log(something);
*/

/* #2.5 Array
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];
console.log(daysOfWeek);

// Get Item from Array 배열에서 원하는것 찾기
console.log(daysOfWeek[4]);

// Add one more day to the array 배열에 요일 더 추가하기
daysOfWeek.push("sun");

console.log(daysOfWeek);
*/


/* #2.6 Object
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// player[0] == name 설명(주석)이 필요하기 때문에 Array는 적합한 방법이 아님 -> Object 필요
//const player = ["nico", 121212, false, "little bit"];

// Object는 중괄호를 사용하고 안에 property(특성)을 작성
// = 이 아닌 : 을 사용
// list는 같은 의미를 가지고 있지만
const player = {
    name: "nico",
    points: 10,
    fat: true,
};
console.log(player);
//console.log(player.name);
//console.log(player["name"]);

// Object 수정
player.fat = false;
player.points = player.points + 15;
console.log(player);

// const object 전체가 하나의 값으로 수정은 불가하지만 안의 값은 수정가능
// player = false(X) player.fat = false(O)

// object에 새로운 특성(property) 추가
player.lastName = "potato";
console.log(player);
*/



// function 함수명(argument){ 실행블록 }
// argument는 여러개 받을 수 있음 
// nameOfPerson과 age는 sayHello라는 function의 body에만 존재
function sayHello(nameOfPerson, age){
    console.log("Hello! my name is " + nameOfPerson + " and I'm " + age);
}
// 함수명(argument);
sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

// argument를 받는 순서도 중요
function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}
function divide(a, b){
    console.log(a / b);
}
plus(2, 5);
divide(98, 20);


// object안에서 function을 만들 때
const player = {
    name: "dada",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    },
};

console.log(player.name);
// object안에 function이 있을 경우만 xx.xxx로 사용 가능
player.sayHello("lynn");