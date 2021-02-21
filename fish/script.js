function inputText(scene) {
  let dialoguer = document.getElementById("gametext");
  return (dialoguer.innerHTML = scene.text);
}

function inputB1(scene) {
  let dialoguer = document.getElementById("choice1text");
  return (dialoguer.innerHTML = scene.b1);
}

function inputB2(scene) {
  let dialoguer = document.getElementById("choice2text");
  return (dialoguer.innerHTML = scene.b2);
}

function restartButton() {
  let dialoguer = document.getElementById("reButton");
  return (dialoguer.innerHTML = "Restart Game");
}

function removeFish() {
  var elementf = document.getElementById("fishy");
  elementf.parentNode.removeChild(elementf);
}

function firstBegin() {
  restartButton();
}

function beginGame(scenepack) {
  inputText(scenepack);
  inputB1(scenepack);
  inputB2(scenepack);
  removeFish();
  firstBegin();
}

function progressGame(scenepack) {
  inputText(scenepack);
  inputB1(scenepack);
  inputB2(scenepack);
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

function leftProgress(scenepack) {
  let a = document.getElementById("choice1text").innerHTML;
  if (a === scenepack.b1) {
    progressGame(scenepack11);
  } else {
    console.log("Expected Error");
  }
}

function rightProgress(scenepack) {
  let a = document.getElementById("choice2text").innerHTML;
  if (a === scenepack.b2) {
    progressGame(scenepack12);
  } else {
    console.log("Expected Error");
  }
}
