var Letter = require('./Letter.js');

function Word(word){
    this.word = word
    this.letters = [];
    this.makeAndPushLettersIntoWord = function(){
        //for loops through texas
        for (var i=0; i< this.word.length; i++){
           //each letter becomes its own object
            var lett = new Letter(this.word[i]);
           //each of those letters are pushed into
           //an [] as a string.. ex[t,e,x,a,s]
            this.letters.push(lett);
        }
    },
    this.display = function(){
    
        var str = "";
       //for loop through [],and makes each letter a string
       //example ['t','e','x','a','s'] 
        for (var i=0; i < this.letters.length; i++){
            //calls display function in Letters obj
            str = str + this.letters[i].display();
        }

        return str;
    }
    this.updateLetter = function(guess){

        var isCorrect = false;


        //check all of the letter objects and see if the guess matches
        //if it does update that letter's found to true

        for (var i=0; i<this.letters.length; i++){
             
            if (this.letters[i].letter == guess){
                 this.letters[i].found = true; 
                 isCorrect = true;
            } 
        }

        return isCorrect;
    } 
}

// var dog = new Word('dog');
// dog.makeAndPushLettersIntoWord();
// // console.log(dog.letters)
// // console.log(dog.display())
// dog.updateLetter('d');
// // dog.updateLetter('o');
// // dog.updateLetter('y');
// console.log(dog.display())

module.exports = Word;