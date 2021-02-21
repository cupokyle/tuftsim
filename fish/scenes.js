class Pack {
  constructor(text, b1, b2, index) {
    this.text = text;
    this.b1 = b1;
    this.b2 = b2;
    this.index = index;
  }
}

const scenepack1 = new Pack(
  "Buzz...<br> Buzz...<br> Buzz... <br> You're awakened by your phone buzzing on the nightstand next to you.<br>It's probably your best bud Harry. He wants to hang out today.",
  "Pick it up",
  "Go back to sleep",
  1
);
const scenepack11 = new Pack(
  "You check your phone. It's a text from Harry.<br><em>Hey man, when are you coming over today?</em><br> As you read it, your bedroom door bursts open. Your dad comes plowing in dressed head to toe in his navy green and beige camping gear. <em>Son! Get up! I'm taking you fishing today, let's go!</em><br> You look back to your phone and text Harry,",
  "<em>Not sure yet, I'll let you know.</em>",
  "<em>Sorry man, I can't.</em>",
  11
);
const scenepack12 = new Pack(
  "You try to fall back asleep, but only three minutes later the door to your bedroom bursts open. Your dad comes plowing in dressed head to toe in his navy green and beige camping gear. <em>Son! Get up! I'm taking you fishing today, let's go!</em>",
  "Get up",
  "<em>Dad I'm not feeling so well today.</em>",
  12
);
const scenepack111 = new Pack(
  "Harry sees your text but doesn't respond. You get up and start getting dressed. You hate fishing. You'd do anything to get out of going fishing with your dad. You think about what you'll say to him when you go back downstairs. </em>",
  "Throw on your normal clothes.",
  "Search the closet for fishing garb.",
  111
);
const scenepack112 = new Pack(
  "Harry immediately messages you back, <em>WTF? y?</em> You don't answer. You get up and start getting dressed. You hate fishing. You'd do anything to get out of going fishing with your dad. You think about what you'll say to him when you go back downstairs.",
  "Think about what to say to Harry.",
  "Think about what to tell your Dad.",
  112
);
const scenepack121 = new Pack(
  "this is the content for the scene after you go back to sleep? Scene 121 or something? huh?",
  "121A",
  "121B",
  121
);
const scenepack122 = new Pack("mario yoshi", "peach", "daisy", 122);
