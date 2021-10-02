hoistFunction();

// js엔진은 항상 선언문을 가장 위로 올림

/*
코드의 가독성과 유지보수를 위해 Hoisting이 일어나지 않도록 한다.
Hoisting을 제대로 모르더라도 함수와 변수를 가급적 코드 상단부에서 선언
let, const를 사용
*/

function hoistFunction() {
    console.log(x);
    var x = 'var';
    console.log(x);
}