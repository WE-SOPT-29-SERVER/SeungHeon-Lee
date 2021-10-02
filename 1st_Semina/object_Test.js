/* Object 생성자 함수 */
const person = new Object(); // 빈 객체 생성

// property 추가
person.name = "이승헌";
person.part = "Server";
person["group"] = "YB";
person.sayHello = function () {
    console.log(`안녕하세요 ${this.name} 입니다.`);
};

console.log(typeof person);
console.log(person);

person.sayHello();

console.log("============================");

/* 객체 리터럴 (가장 일반적인 자바스크립트의 객체 생성 방식) */
const emptyObject = {}; // 빈 객체 생성

const animal = {
    animalType: "dog",
    animalName: "삼순이",
    animalFriends: ["결", "짱구", "쿠키"],
    bark: function () {
        console.log(`${this.animalName}: 멍멍`);
    },
    thisFriends: function () {
        this.animalFriends.forEach(friend => {
            console.log(`${this.animalName}의 친구: ${friend}`);
        });
    },
};

console.log(animal);
animal.bark();
animal.thisFriends();