var lines = [
    // Credits to ster, gamingmedley, darkness3560, JettTheMedic, and many other redditors
    "Teams have been vote scrambled",
    "The game glitches",
    "Backcap",
    "One of the teams is not playing the game",
    "You cannot understand a player (language or voice)",
    "Actual balanced and fun game",
    "Point gets capped or pushed with 5+ speed",
    "Strange item gets upgraded",
    "You get a taunt kill",
    "You got auto balanced",
    "Taunt after kill",
    "Top score (#1)",
    "You get 3+ domination",
    "You bleed",
    "You got ubered (or kritz'd or quicked, etc.)",
    "Someone shoots at uber",
    "Trade",
    "Mad in chat",
    "Someone did something unexplain-able",
    "Good voice chatter",
    "Bad voice chatter",
    "Someone has |Trade.tf in name",
    "Cheater",
    "Someone gets a taunt kill",
    "Someone talks funny in chat",
    "Environ-mental kill or suicide (train, cliff)",
    "Someone asks for a trade",
    "Someone is somewhere where they are not supposed to be",
    "Someone got votekicked",
    "Lime painted cosmetic",
    "Pink painted cosmetic",
    "Someone goes the wrong way",
    "Badly renamed weapon",
    "Gibus + Pyrovision",
    "Someone needs a Dispenser here (spam)",
    "Unusual",
    "Earbuds",
    "Australium",
    "Frying Pan",
    "Caribou",
    "Demoman or Soldier suicide",
    "Heavy Princess or (any class) Unicorn",
    "The attacking team cannot cap 1 point",
    "'A celebrity' gets on the server",
    "Your team waits to push until overtime",
    "Your team gets spawn camped",
    "Your team has 4+ dominators",
    "Teammate really thinks you're a Spy",
    "3+ Players idle in spawn",
    "Offensive name",
    "Meme name",
    "2+ Gibuses on your team",
    "Your team cannot kill the Sentry",
    "Lost or won at final point",
    "The other team gets spawn camped",
    "The other team has 3+ dominations",
    "Schaden-freude (taunt)",
    "Conga",
    "Rock Paper Scissors",
    "Kazotsky Kick",
    "Mannrobics",
    "3+ Scouts in your team",
    "Scout bonks to nowhere",
    "Bonked Scout is trapped by Sentry",
    "You got milked",
    "Crocket kills 3+ players",
    "Cow Mangler 5000",
    "Soldier deploys Buff Banner",
    "Rocket Jumper",
    "3+ Pyros in your team",
    "Phlog Mmmph killed 3+ players",
    "Pyro airblast kills a player (cliff, deflect or fall dmg)",
    "Pyro actually extinguishes teammates",
    "Pyro never extinguishes teammates",
    "Backburner",
    "3+ Demomen in your team",
    "Demoknight",
    "Demopan",
    "Double Donk!",
    "3+ Heavies in your team",
    "Heavy gets pushed by the cart",
    "Heavy revs up for too long without shooting",
    "Friendly Hoovy",
    "You pick up a Sandvich",
    "3+ Engineers in your team",
    "Frontier Justice + Gunslinger",
    "2+ Engineers, but no Teleporters",
    "2+ Mini Sentries in same area",
    "Badly placed Sentries",
    "Sentry in most common spot for map",
    "Rancho Relaxo away from nest",
    "Eureka Effect teleport",
    "3+ Medics in your team",
    "No Medic on your team",
    "Medic heals enemy Spy",
    "Medic drops uber",
    "Lone ubered Medic",
    "Medic + Medic combo",
    "Medic only heals pocket",
    "Medic uses uber in setup",
    "3+ Snipers in your team",
    "2+ Snipers at same spot",
    "Sniper penetration kill (server sfx)",
    "Huntsman",
    "3+ Spies in your team",
    "Spy misses 2 stabs in a row",
    "Spy thinks he is fooling everyone",
    "Well hidden Box Trot Spy",
  ];
  
  // Fisher-Yates Shuffle
  var shuffle = function(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };
  // Did I just steal this code from Wikipedia, or something?
  
  var insertToCard = function(array) {
    var slot = 25;
    while (slot) {
      $("label:nth-child(" + slot + ") .mark span").text(array[slot + 1]);
      slot--;
    }
  };
  
  $(document).ready(function() {
    var shuffledLines = shuffle(lines);
    insertToCard(shuffledLines); // #hellaswag
    $("#seed").text(Math.floor(Math.random() * 100000000)); // TODO
  });
  