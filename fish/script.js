class Pack {
  constructor(text, b1, b2, index) {
    this.text = text;
    this.b1 = b1;
    this.b2 = b2;
    this.index = index;
  }
}

let scenepack1 = new Pack(
  "Buzz...<br> Buzz...<br> Buzz... <br> You're awakened by your phone buzzing on the nightstand next to you.<br>It's probably your best bud Harry. He wants to hang out today.",
  "Pick it up",
  "Go back to sleep",
  "1"
);
let scenepack11 = new Pack(
  "You check your phone. It's a text from Harry.<br><em>Hey man, when are you coming over today?</em><br> As you read it, your bedroom door bursts open. Your dad comes plowing in dressed head to toe in his navy green and beige camping gear. <em>Son! Get up! I'm taking you fishing today, let's go!</em><br> You look back to your phone and text Harry,",
  "<em>Not sure yet, I'll let you know.</em>",
  "<em>Sorry man, I can't.</em>",
  "11"
);
let scenepack12 = new Pack(
  "You try to fall back asleep, but only three minutes later the door to your bedroom bursts open. Your dad comes plowing in dressed head to toe in his navy green and beige camping gear. <em>Son! Get up! I'm taking you fishing today, let's go!</em>",
  "Get up",
  "<em>Dad I'm not feeling so well today.</em>",
  "12"
);
let scenepack111 = new Pack(
  "Harry sees your text but doesn't respond. You get up and start getting dressed. You hate fishing. You'd do anything to get out of going fishing with your dad. You think about what you'll say to him when you go back downstairs. </em>",
  "Throw on your normal clothes.",
  "Search the closet for fishing garb.",
  "111"
);
let scenepack112 = new Pack(
  "Harry immediately messages you back, <em>WTF? y?</em> You don't answer. You get up and start getting dressed. You hate fishing. You'd do anything to get out of going fishing with your dad. You think about what you'll say to him when you go back downstairs.",
  "Think about what to say to Harry.",
  "Think about what to tell your Dad.",
  "112"
);
let scenepack121 = new Pack(
  "this is the content for the scene after you go back to sleep? Scene 121 or something? huh?",
  "121 left button",
  "121 right button",
  "121"
);
let scenepack122 = new Pack("mario yoshi", "peach", "daisy", "122");

let scenepack1111 = new Pack(
  "this is the content for 1111",
  "okay",
  "yup",
  1111
);
let scenepack1112 = new Pack(
  "this is the content for 1112",
  "peach",
  "daisy",
  1112
);
let scenepack1121 = new Pack(
  "this is the content for 1121",
  "peach",
  "daisy",
  1121
);
let scenepack1122 = new Pack(
  "this is the content for 1122",
  "peach",
  "daisy",
  1122
);

let scenepack1211 = new Pack(
  "this is the content for 1211",
  "peach",
  "daisy",
  1211
);
let scenepack1212 = new Pack(
  "this is the content for 1212",
  "peach",
  "daisy",
  1212
);
let scenepack1221 = new Pack(
  "this is the content for 1221",
  "peach",
  "daisy",
  1221
);
let scenepack1222 = new Pack(
  "this is the content for 1222",
  "peach",
  "daisy",
  1222
);
let scenepack11111 = new Pack(
  "this is the content for 11111",
  "peach",
  "daisy",
  11111
);
let scenepack11112 = new Pack(
  "this is the content for 11112",
  "peach",
  "daisy",
  11112
);
let scenepack11121 = new Pack(
  "this is the content for 11121",
  "peach",
  "daisy",
  11121
);
let scenepack11122 = new Pack(
  "this is the content for 11122",
  "peach",
  "daisy",
  11122
);
let scenepack11211 = new Pack(
  "this is the content for 11211",
  "peach",
  "daisy",
  11211
);
let scenepack11212 = new Pack(
  "this is the content for 11212",
  "peach",
  "daisy",
  11212
);
let scenepack11221 = new Pack(
  "this is the content for 11221",
  "peach",
  "daisy",
  11221
);
let scenepack11222 = new Pack(
  "this is the content for 11222",
  "peach",
  "daisy",
  11222
);
let scenepack12111 = new Pack(
  "this is the content for 12111",
  "peach",
  "daisy",
  12111
);
let scenepack12112 = new Pack(
  "this is the content for 12112",
  "peach",
  "daisy",
  12112
);
let scenepack12121 = new Pack(
  "this is the content for 12121",
  "peach",
  "daisy",
  12121
);
let scenepack12122 = new Pack(
  "this is the content for 12122",
  "peach",
  "daisy",
  12122
);
let scenepack12211 = new Pack(
  "this is the content for 12211",
  "peach",
  "daisy",
  12211
);
let scenepack12212 = new Pack(
  "this is the content for 12212",
  "peach",
  "daisy",
  12212
);
let scenepack12221 = new Pack(
  "this is the content for 12221",
  "peach",
  "daisy",
  12221
);
let scenepack12222 = new Pack(
  "this is the content for 12222",
  "peach",
  "daisy",
  12222
);

const allPacks = [
  scenepack1,
  scenepack11,
  scenepack12,
  scenepack111,
  scenepack112,
  scenepack121,
  scenepack122,
  scenepack1111,
  scenepack1112,
  scenepack1121,
  scenepack1122,
  scenepack1211,
  scenepack1212,
  scenepack1221,
  scenepack1222,
  scenepack11111,
  scenepack11112,
  scenepack11121,
  scenepack11122,
  scenepack11211,
  scenepack11212,
  scenepack11221,
  scenepack11222,
  scenepack12111,
  scenepack12112,
  scenepack12121,
  scenepack12122,
  scenepack12211,
  scenepack12212,
  scenepack12221,
  scenepack12222,
];

let packSwitcher = scenepack1;

var buttonL = document.getElementById("choice1");
var buttonR = document.getElementById("choice2");
var tagline = document.getElementById("tagline");

function choiceButtonShow() {
  buttonL.style.visibility = "visible";
  buttonR.style.visibility = "visible";
  tagline.style.visibility = "hidden";
}

function inputText(result) {
  let dialoguer = document.getElementById("gametext");
  return (dialoguer.innerHTML = result.text);
}

function inputB1(result) {
  let dialoguer = document.getElementById("choice1text");
  return (dialoguer.innerHTML = result.b1);
}

function inputB2(result) {
  let dialoguer = document.getElementById("choice2text");
  return (dialoguer.innerHTML = result.b2);
}

function restartButton() {
  let dialoguer = document.getElementById("reButton");
  return (dialoguer.innerHTML = "Restart Game");
}

function removeFish() {
  var elementf = document.getElementById("fishy");
  elementf.parentNode.removeChild(elementf);
}

function beginGame(scenepack) {
  inputText(scenepack);
  inputB1(scenepack);
  inputB2(scenepack);
  choiceButtonShow();
  removeFish();
  restartButton();
}

function restartPage() {
  let a = document.getElementById("reButton").innerHTML;
  if (a === "Restart Game") {
    location.reload();
    return false;
  } else {
    beginGame(scenepack1);
  }
}

// this function takes a scenepack
// and outputs as a string with "1" tacked on.

let funcL = function (scenepack) {
  return `${scenepack.index}` + "1";
};

function getByValue(arr, value) {
  for (var i = 0, iLen = arr.length; i < iLen; i++) {
    if (arr[i].index == value) return arr[i];
  }
}

function leftJump() {
  let pack = packSwitcher;
  var newVal = funcL(pack);
  packSwitcher = getByValue(allPacks, newVal);
  return packSwitcher;
}

function progressLeft() {
  leftJump();
  inputText(packSwitcher);
  inputB1(packSwitcher);
  inputB2(packSwitcher);
}

// this function takes a scenepack
// and outputs as a string with "1" tacked on
// the end if the param pack's index ends in 1.

let funcR = function (scenepack) {
  return `${scenepack.index}` + "2";
};

function rightJump() {
  let pack = packSwitcher;
  var newVal = funcR(pack);
  packSwitcher = getByValue(allPacks, newVal);
  return packSwitcher;
}

function progressRight() {
  rightJump();
  inputText(packSwitcher);
  inputB1(packSwitcher);
  inputB2(packSwitcher);
}
