/*
자바 스크립트의 기본 타입
{}로 감싸진 형태

property의 정렬되지 않은 집합
property는 {key:value} 형태로 구성
property가 함수일 경우 method라고 부름

원시타입을 제외한 나머지는 모두 객체
*/

// Array JS에선 배열도 객체, 배열 요소의 자료형 달라도 됨
let arr1 = [2, 'some string', undefined];
let arr2 = Array(null, 4, { part: 'server' });

/*
Funtion JS에선 객체, 하나의 고유한 목적의 작업을 수행하도록 설계된 독립적인 블록
자바스크립트의 함수는 일급객체
변수 or 데이터 구조에 담을 수 있다.
다른 함수의 파라미터로 전달 가능
반환값으로 사용 가능
*/
function someFunction(parameters) {
    // logic
}

// 함수 선언식 vs 함수 표현식
// 함수 선언문 생성
function funcName(params) {
    // logic;
}

// 함수 선언문 실행
funcName(params);

// 함수 표현식 생성
const functionName = function(params) {
    // logic
}

// *********************
const func = (params) => {
    // logic
}

// 함수 표현식 실행
functionName(params);

// logic이 한줄이면 return 생략가능
const add = (x, y) => x + y;