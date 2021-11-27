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


/* #2.7
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
*/

/* #2.9 #2.10
const toBuy = ["potato", "tomato", "pizza"];
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("meat");
console.log(toBuy);


const player = {
    name: "Nico",
    age: 98,
};
console.log(player);
player.name = "nicolas";
console.log(player);
player.sexy = "soon";
console.log(player);



function minusFive(first, second) {
    console.log(first - 5);
}

minusFive(5, 10, 23, 54, 7);
*/


/*
// 계산기 만들기(console.log -> alert )
const calculator = {
    add: function(a, b) {
        alert(a + b);
    },
    minus: function (a, b) {
        alert(a - b);
    },
    times: function (a, b) {
        alert(a * b);
    },
    divide: function(a, b) {
        alert(a / b);
    },
    powerOf: function(a, b) {
        alert(a**b);
    },
};

calculator.add(4, 7);
calculator.minus(9, 4);
calculator.times(4, 3)
calculator.divide(10, 4);
calculator.powerOf(2, 3);
*/



/* #2.11 ~ #2.12
// function의 바디에서의 결과값을 밖으로 가지고 나갈 수 없다
// 하지만 return을 사용하면 function 안에서의 결과값을 반환
// 한번 return 하면 function은 끝남(return 뒤의 코드는 실행되지 않음)
const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    powerOf: function(a, b) {
        return a ** b;
    },
};

const addResult = calculator.add(2, 3);
const minusResult = calculator.minus(addResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, addResult);
const powerResult = calculator.powerOf(divideResult, minusResult)
*/



const age = parseInt( prompt("How old are you?") );

if (isNaN(age)) {
    // condition === true
    console.log("please write a number");
} else {
    // condition === false
    console.log("Thank you for writing your age.")
}