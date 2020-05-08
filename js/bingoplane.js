var lines = [
  // Credits to ster, gamingmedley, darkness3560, JettTheMedic, and many other redditors
  "5일 이상 집에서 안나가도 크게 불편한 것이 없다",
  "같이 밤 새면서 노는 친구가 있다",
  "개파 종파 올참",
  "누군가 먼저 '뭐해?'라고 메시지가 온 적이 많다",
  "단톡에서 말해도 반응이 없을까봐 썼다 지운 적이 많다",
  "단톡에서 본인이 말 안해도 단톡이 잘 돌아간다",
  "대리출석 해 줄 친구 있음",
  "미팅 나가서 귓속말 게임해 봄",
  "빼빼로데이, 화이트데이, 발렌타인데이에 받아본 적이 없다",
  "시험 공부는 친구들이랑 학교에서",
  "시험 기간에 술 모임 가져 봄",
  "아는 술게임 5가지 이상",
  "옷장에 옷의 스타일이 4종류 이상이다",
  "워터파크를 가본 적 있다",
  "이성이 포함된 술자리를 연 5회 이상 한다",
  "인싸들이 즐겁게 노는것을 보고 내가 그래도 쟤들보다는 낫다고 생각한 적이 있다",
  "자기소개서 특기에 쓸 말이 딱히 없다",
  "정말 친한 친구가 3명 이상 있다",
  "축제를 여러사람과 가본 적 있다",
  "친구가 집에와서 자고 간 적이 있다",
  "친한 이성(형,오빠,동생)가 10명 이상 있다",
  "하루에 한번 쯤은 친구에게 전화가 걸려온다",
  "학식에서 혼밥한 적 없음",
  "한 달에 술 약속, 밥 약속 2회 이상 있다",
  "한번 이상 연애를 해봤다",
];

// Fisher-Yates Shuffle
var shuffle = function (array) {
  var m = array.length + 1,
    t,
    i;
  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element
    i = m--;
    // And swap it with the current element.
    t = array[m - 1];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};
// Did I just steal this code from Wikipedia, or something?

var insertToCard = function (array) {
  var slot = 25;
  while (slot) {
    $("label:nth-child(" + slot + ") .mark span").text(array[slot + 1]);
    slot--;
  }
};

$(document).ready(function () {
  var shuffledLines = shuffle(lines);
  insertToCard(shuffledLines); // #hellaswag
});

$(function () {
  $("label input").on("click", function () {
    $("count").text($("label input:checked + .mark").length);
  });
});
