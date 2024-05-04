let button = document.querySelector("btn");

const words = [
  {
    word: "flamboyant",
    meaning: "something or someone who is recognizable",
    translate: "Výrazné",
    example: "I see him, he is wearing flemboyant colors.",
  },
  {
    word: "flat back",
    meaning: "when someone has anatomy problem with his back",
    translate: "Plochá záda",
    example: "I have a flat back syndrome.",
  },
  {
    word: "succesion",
    meaning: "when something goes step by step",
    translate: "Poslouplnost",
    example: "I love mathematical succesion.",
  },
  {
    word: "rebound",
    meaning: "when you use power to jump",
    translate: "Odrazit se",
    example: "You have to rebound.",
  },
  {
    word: "recovery",
    meaning: "when someone is injured and has to rest to get healty",
    translate: "Zotavení",
    example: "Your recovery is on a good way.",
  },
  {
    word: "shift",
    meaning: "when someone or something is moving from level to another level",
    translate: "Posun",
    example: "We are making a big shifts ahead.",
  },
  {
    word: "release",
    meaning: "make something goes freely",
    translate: "Uvolnit",
    example: "Release your breath.",
  },
  {
    word: "contraction",
    meaning: "when someone or something gets smaller",
    translate: "smrštění",
    example: "You have to contract your muscles.",
  },
  {
    word: "push",
    meaning: "when you move something forward",
    translate: "Tlačit",
    example: "Push to open.",
  },
  {
    word: "pull",
    meaning: "when you move something towards to you",
    translate: "Táhnout",
    example: "Pull to open.",
  },
  {
    word: "awareness",
    meaning: "when you have some knowledge of something",
    translate: "Povědomí",
    example: "I have some awareness of classical music.",
  },
  {
    word: "substantion",
    meaning: "something what is important",
    translate: "Podstatný",
    example: "It is substantion to have the best actors in this play.",
  },
  {
    word: "fingering",
    meaning: "range of something for each finger",
    translate: "Prstoklad",
    example: "Mozzart had good fingering technique.",
  },
  {
    word: "to go back to square one",
    meaning: "when you do something and have to go back to the start",
    translate: "Vrátit se na začátek",
    example: "It is complicated, we have to go back to square one.",
  },
  {
    word: "plateau",
    meaning: "when something is on the same level",
    translate: "Ustálená úroveň",
    example: "I make twenty push-ups, but I can't make more.",
  },
  {
    word: "overuse",
    meaning: "something or someone who is use often than normal",
    translate: "Nadužívaní",
    example: "A couch overuse a key players.",
  },
  {
    word: "lavatory",
    meaning: "a room with toiletes",
    translate: "Toaleta",
    example: "A sink is broken on the lavatory.",
  },
  {
    word: "gravitas",
    meaning: "something really serious",
    translate: "Vážnost",
    example: "My teacher always talks with gravitas.",
  },
  {
    word: "menace",
    meaning: "when something bad or terrible could happen",
    translate: "Nebezpečí",
    example: "There is still a menace of drugs.",
  },
  {
    word: "wise",
    meaning: "someone who is inteligent or rational",
    translate: "Moudrý",
    example: "Marcus Aurelius was really wise man.",
  },
  {
    word: "troupe",
    meaning: "a group of artists",
    translate: "umělecká skupina",
    example: "I'm missing the summer tours with our dancing troupe.",
  },
  {
    word: "crucial",
    meaning: "something what is really important",
    translate: "Stěžejní",
    example: "It's crucial for our theatre to have sold out.",
  },
  {
    word: "band pit",
    meaning: "a room in theatre where are instruments during performance",
    translate: "Orchestřiště",
    example: "We saw band pit from our seats on the balcony.",
  },
  {
    word: "opera goer",
    meaning: "someone who attend opera",
    translate: "Návštěvník opery",
    example: "My parents are opera goers.",
  },
  {
    word: "to top the charts",
    meaning: "when someone or something is first on the list",
    translate: "První místo v žebříčku",
    example:
      "Taylor Swift is on many radios across the world on top the charts.",
  },
  {
    word: "primordial",
    meaning: "a thing which was first from all",
    translate: "Prvotní",
    example:
      "Gangs of New York was primordial film where Scorsese cooperated with DiCaprio.",
  },
  {
    word: "maintenance",
    meaning: "something what is on the same level for a long period",
    translate: "Udržování",
    example: "As a dancer, he has to maintenance his physical condition.",
  },
  {
    word: "unambiguous",
    meaning: "something where is only one point of view.",
    translate: "Jednoznačný",
    example: "The Beatles are unambiguously the best band from Liverpool.",
  },
  {
    word: "bow",
    meaning: "when someone put his head and body down to thank. ",
    translate: "Úklona",
    example: "They took a bow four time, after the performance.",
  },
  {
    word: "soothing",
    meaning: "something what makes you  calm and chill.",
    translate: "Uklidňující",
    example: "I like to listening jazz. It's so soothing!",
  },
];

function searchWord() {
  let search = document.getElementById("userSearch");
  let foundWord = words.find((obj) => obj.word === search.value.toLowerCase());

  if (foundWord) {
    document.getElementById("meaning").innerText = foundWord.meaning;
    document.getElementById("translate").innerText = foundWord.translate;
    document.getElementById("example").innerText = foundWord.example;
  } else {
    document.getElementById("meaning").innerText = "Slovo nebylo nalezeno.";
    document.getElementById("translate").innerText = "Slovo nebylo nalezeno.";
    document.getElementById("example").innerText = "Slovo nebylo nalezeno.";
  }
}
