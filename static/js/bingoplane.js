var lines = [
  // Credits to ster, gamingmedley, darkness3560, JettTheMedic, and many other redditors
  "CC 또는 같은 반 연애 해 봄",
  "같이 밤 새면서 노는 친구가 있다",
  "갠톡 거의 안함",
  "길거리에서 번호를 따여봤다",
  "누군가 먼저 '뭐해?'라고 메시지가 온 적이 많다",
  "단톡에서 말해도 반응이 없을까봐 썼다 지운 적이 많다",
  "단톡에서 본인이 말 안해도 단톡이 잘 돌아간다",
  "대리출석 해 줄 친구 있음",
  "데이트를 해본 적 있다",
  "모임에 안나가도 연락이 오지않는다",
  "빼빼로데이, 화이트데이, 발렌타인데이에 받아본 적이 없다",
  "생일 안 챙김",
  "술자리 안 불러줌 못 나감",
  "아는 술게임 5가지 이상",
  "연애 고백 2번 내가 함",
  "옷장에 옷의 스타일이 4종류 이상이다",
  "워터파크를 가본 적 있다",
  "이성에게 고백 받아봄",
  "자기소개서 특기에 쓸 말이 딱히 없다",
  "즐겁게 노는것을 보고 '쟤들보다는 낫다'고 생각한 적이 있다",
  "직전 생일에 친구/지인 5명 이상에게 생일선물 받음",
  "축제를 여러사람과 가본 적 있다",
  "친구가 집에와서 자고 간 적이 있다",
  "카카오톡 친구가 250명 이상이다",
  "카톡에 단톡방이 없다",
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
