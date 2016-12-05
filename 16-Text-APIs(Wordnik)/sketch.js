var englishWords, relatedWords, phrases, definitions;
var words = [];

function preload() {
  var urlStart = "http://api.wordnik.com:80/v4/word.json/";
  var englishWords = ["color", "developer", "math", "computer", "cumbersome", "mouse", "vicissitude", "sweet", "spectacle", "vivid"];
  var urlRelatedWords= "/relatedWords?useCanonical=false&limitPerRelationshipType=10&"
  var urlPhrases= "/phrases?limit=5&wlmi=0&useCanonical=false&"
  var urlDefinitions = "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&";
  var apiKey = "api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

  for (var i = 0; i < englishWords.length; i++) {
    var tempRelatedWord= loadJSON(urlStart + englishWords[i] + urlRelatedWords + apiKey);
    var tempPhrases= loadJSON(urlStart + englishWords[i] + urlPhrases + apiKey);
    var tempDefinitions= loadJSON(urlStart + englishWords[i] + urlDefinitions + apiKey);
    words.push(new Word(englishWords[i], tempRelatedWord, tempPhrases,tempDefinitions))
  }
}

function setup() {

}

function draw() {


}