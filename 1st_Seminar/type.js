/*
Number 모든 수는 64bit 실수
Boolean true or false
String 문자열 "" '' 같은 취급, `문자열 -Template literal을 지원
Symbol ES6이후에 나온 원시타입 (사용 x)
Null 값이 정해지지 않은 것을 의미 Object 타입
Undefined 타입이 정해지지 않은 것을 의미 초기화되지 않은 변수나 존재하지 않는 값
*/

const str1 = "Just do it";
const str2 = "Just don't do it";

const myName = "이승헌";

const backtickStr = `안녕하세요 ${myName} 입니다.`;
console.log(backtickStr);

const numberVariable = 2;
const stringVariable = '2';

// 값만 비교 == 동등연산자 !=
console.log(numberVariable == stringVariable);
console.log(numberVariable + stringVariable);
console.log(typeof (numberVariable + stringVariable));

console.log(numberVariable + Number(stringVariable));

// 값 & 타입 비교 === *일치연산자* !==
console.log(numberVariable === stringVariable);

console.log(typeof 1);
console.log(typeof "str");
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof Symbol());
console.log(typeof null); // object = 버그

// null vs undefined
console.log("null vs undefined");
console.log("null === undefined: ", null === undefined);
console.log("null == undefined: ", null == undefined);

const num1 = 1;
const num2 = 2;
const str = "2";

const bool = true;
console.log(num1 == bool); // true
// 1 -> true

console.log(num2 == bool); // false

// Truthy
// 대충 true
console.log(Boolean(10))
console.log(Boolean(-41))
console.log(Boolean('문자'))
console.log(Boolean(true))
console.log(Boolean({}))
console.log(Boolean([]))

// Falsy
// 대충 false
// false, 0, null, undefined, ''
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(''))
console.log(Boolean(false))

// 데이터베이스 사용시 undefinded 정의 ㄴㄴ
