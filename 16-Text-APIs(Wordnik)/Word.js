function Word(word, relatedWords, phrases, definitions){
  this.word= word;
  this.definition= definitions;
  this.relatedWord = relatedWords;
  this.phrases= phrases;
  
  this.extractUseful= function(){
    for(var i=0; i< word.length; i++){
      this.word[i]= this.word[i].text;
    }
  }
  
}