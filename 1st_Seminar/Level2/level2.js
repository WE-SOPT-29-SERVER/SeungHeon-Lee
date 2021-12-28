// 2021/10/02 level2
// 자신의 조원들을 소개할 수 있는 json Array 만들기
// 취미 정은: 게임, 지윤: 술, 진영: 산책하기

// 멤버들의 정보가 담긴 JSON 배열 선언
const members = [
    {
        id: 1,
        name: "이승헌",
        location: "광흥창역 근처",
        age: "23",
        hobby: "콘솔 게임"
    },
    {
        id: 2,
        name: "남지윤",
        location: "공덕역 근처",
        age: "22",
        hobby: "술"
    },
    {
        id: 3,
        name: "최진영",
        location: "서버구 극락동",
        age: "22",
        hobby: "산책"
    },
    {
        id: 4,
        name: "이지윤",
        location: "숙대 근처",
        age: "23",
        hobby: "게임"
    },
]

// map을 이용해서 JSON 배열에 담긴 요소를 하나씩 출력
function memberInfo(members) {
    members.map(member => console.log(member));
}

// 함수 호출
memberInfo(members);