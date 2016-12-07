function Word(word, relatedWords, phrases, definitions){
  this.word = word;
  this.definition = definitions;
  this.relatedWords = relatedWords;
  this.phrases = phrases;
  
  console.log(relatedWords);
  
  this.extractUseful= function(){
    
    for(var i=0; i< relatedWords.length; i++) {
      //this.relatedWords[i]= this.relatedWords[i].words;
      for (var j=0; j< relatedWords[i].words.length; j++) {
        this.relatedWords.push(this.relatedWords[i].words[j]);
      }
    }
    // for(var j=0; j< definitions.length; j++){
    //   this.defintions[j]= this.definitions[i].text;
    // }
  }
  
}