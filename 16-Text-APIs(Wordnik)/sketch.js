var englishWords, relatedWords, phrases, definitions;
var words = [];

function preload() {
  var urlStart = "http://api.wordnik.com:80/v4/word.json/";

  var englishWords = ["color", "developer", "math", "computer", "cumbersome", "mouse", "vicissitude", "sweet", "spectacle", "vivid"];

  var urlRelatedWords = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&"
  var urlPhrases = "/phrases?limit=5&wlmi=0&useCanonical=false&"
  var urlDefinitions = "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&";

  var apiKey = "api_key=b15d7084e9f53e2e1f1133b19060909bd2e61f628abba11f6";

  for (var i = 0; i < englishWords.length; i++) {
    var tempRelatedWords = loadJSON(urlStart + englishWords[i] + urlRelatedWords + apiKey);
    var tempPhrases = loadJSON(urlStart + englishWords[i] + urlPhrases + apiKey);
    var tempDefinitions = loadJSON(urlStart + englishWords[i] + urlDefinitions + apiKey);
    words.push(new Word(englishWords[i], tempRelatedWords, tempPhrases, tempDefinitions));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  for (var i = 0; i < words.length; i++) {
    words[i].extractUseful();
    words[i].toChar();
    words[i].display(width / 5 * (i - 5 * Math.floor(i / 5)) + width/10, height / 3 * (1 + Math.floor(i / 5)));
  }
}