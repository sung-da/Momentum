/* #2.3
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

/* #2.4
const amIFat = null;
let something;
console.log(amIFat);
console.log(something);
*/

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const dayOfWeek = [mon , tue , wed , thu , fri , sat , sun];

const nonsense = [1, 2, "hello", false, null, true, undefined, "dada"]

console.log(dayOfWeek, nonsense);