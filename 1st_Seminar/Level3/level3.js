// 2021/10/02 level3
// 서버파트 member.js 데이터를 이용해서 랜덤으로 조를 짜는 알고리즘 만들어보기.
// 조건: OB, YB 비율 오차범위를 최소한으로 유지하며 코드 작성
// SOPT서버 멤버 총원 = 37 OB = 16 YB = 21

const members = [
  { name: "강한희", part: "Server", group: "OB" },
  { name: "고성용", part: "Server", group: "OB" },
  { name: "구건모", part: "Server", group: "YB" },
  { name: "권세훈", part: "Server", group: "YB" },
  { name: "김영권", part: "Server", group: "YB" },
  { name: "김은지", part: "Server", group: "YB" },
  { name: "김진욱", part: "Server", group: "YB" },
  { name: "김희빈", part: "Server", group: "OB" },
  { name: "남지윤", part: "Server", group: "YB" },
  { name: "문규원", part: "Server", group: "YB" },
  { name: "박나희", part: "Server", group: "OB" },
  { name: "박정현", part: "Server", group: "YB" },
  { name: "박현지", part: "Server", group: "OB" },
  { name: "변주현", part: "Server", group: "OB" },
  { name: "서호영", part: "Server", group: "OB" },
  { name: "설지원", part: "Server", group: "YB" },
  { name: "손시형", part: "Server", group: "YB" },
  { name: "안준영", part: "Server", group: "OB" },
  { name: "장서현", part: "Server", group: "OB" },
  { name: "오예원", part: "Server", group: "OB" },
  { name: "이다은", part: "Server", group: "OB" },
  { name: "이동근", part: "Server", group: "YB" },
  { name: "이솔", part: "Server", group: "OB" },
  { name: "이승헌", part: "Server", group: "YB" },
  { name: "이정은", part: "Server", group: "YB" },
  { name: "이제준", part: "Server", group: "YB" },
  { name: "정설희", part: "Server", group: "OB" },
  { name: "조윤서", part: "Server", group: "OB" },
  { name: "조재호", part: "Server", group: "YB" },
  { name: "조찬우", part: "Server", group: "YB" },
  { name: "주어진사랑", part: "Server", group: "YB" },
  { name: "주효식", part: "Server", group: "YB" },
  { name: "채정아", part: "Server", group: "OB" },
  { name: "최영재", part: "Server", group: "OB" },
  { name: "최유림", part: "Server", group: "YB" },
  { name: "최진영", part: "Server", group: "YB" },
  { name: "허유정", part: "Server", group: "YB" },
];

// 각 멤버를 저장할 배열
let ybList = [];
let obList = [];

// 팀을 저장할 배열
let teamJsonArray = new Array();
let team = [];
let teamCount = 0;

// YB & OB에 따라서 멤버들 분리
members.map(member => {
  if (member.group === "YB") {
    ybList.push(member);
  } else {
    obList.push(member);
  }
});

// 팀이 8개 만들어 질 때까지 YB2명 OB2명으로 팀 구성
while (teamCount < 8) {

  // YB에서 랜덤으로 2명 뽑아서 팀에 추가
  for (let i = 0; i < 2; i++) {
    const index = Math.floor(Math.random() * ybList.length);
    team.push(ybList[index]);
    ybList.splice(index, 1);
  }

  // OB에서 랜덤으로 2명 뽑아서 팀에 추가
  for (let i = 0; i < 2; i++) {
    const index = Math.floor(Math.random() * obList.length);
    team.push(obList[index]);
    obList.splice(index, 1);
  }

  teamJsonArray.push(team);
  team = [];
  teamCount++;
}

// 남은 YB 5명 차례대로 팀 배정
for (let i = 0; i < ybList.length; i++) {
  teamJsonArray[i].push(ybList[i]);
}

console.log(teamJsonArray);