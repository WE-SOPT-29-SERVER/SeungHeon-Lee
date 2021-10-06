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

// 팀원을 랜덤으로 뽑아주는 함수
function randomSelector() {
  let randomList = [];
  while (randomList.length < members.length) {
    let randomNumber = Math.floor(Math.random() * 37)
  
    if (randomList.includes(randomNumber)) {
      continue;
    }
    randomList.push(randomNumber);
  }
  
  return randomList;
}

let randomList = randomSelector();

console.log(randomList);

// 각 팀에 OB 한 명 YB 두 명을 포함
let teamJsonArray = new Array();
let team = [];

let index = 0;
let OBCount = 0;
let YBCount = 0;

while (randomList.length > 0) {
  let member = members[randomList[index]];

  for (let i = 0; i < team.length; i++) {
    if (team[i].group === "YB") {
      YBCount += 1;
    } else {
      OBCount += 1;
    }
  }

  if (member.group === "YB") {
    if (YBCount >= 2) {
      index += 1;
      continue;
    } else {
      team.push(member);
      randomList.splice(index, 1);
      index = 0;
    }
  } else {
    if (OBCount >= 1) {
      index += 1;
      continue;
    } else {
      team.push(member);
      randomList.splice(index, 1);
      index = 0;
    }
  }

  if (team.length === 3) {
    teamJsonArray.push(team);
    team = [];
    index = 0;
    YBCount = 0;
    OBCount = 0;
  }
}

console.log(teamJsonArray);