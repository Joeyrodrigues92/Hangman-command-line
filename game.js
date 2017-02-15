var inquirer = require('inquirer')
var Word = require('./Word.js');

var words = ['california', 'alaska', 'texas', 'montana'];
//picks random word from words array..example texas
var wordToPlay = words[Math.floor(Math.random()*words.length)];
//the random word picked becomes wordToPlay, the NEW object 'WORD', and wordObject
var wordObject = new Word(wordToPlay);

// //texas, is  used in this function and called
// wordObject.makeAndPushLettersIntoWord();

// console.log(wordObject.display());
//guesses allowed
var guesses = 4;




function askLetter(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "What letter do you guess?"}, 
    ]).then(function(data){
         //guess is in the data..inside name key
        if (data.guess) {
           


            //checks to see if letter is correct, by calling the function updateLetter
            if (wordObject.updateLetter(data.guess)) {
              
                console.log('*Good Guess Champ!*');
            
            } else {
               
                console.log('Incorrect.. Only have ' + guesses + ' guesses left')
            
               
                guesses --;
                    if (guesses === -1) {
                        
                        console.log('GAME OVER LOSER!')
                        //ends game
                        return;
                    }
            }
             console.log(wordObject.display());
            
            askLetter();
            
        }      
    })    
};



function readyToPlay(){
    inquirer.prompt([
        {
        type: 'input',
        name: 'start',
        message: 'Welcome to HANG-MAN States Edition..Enter y to start...'},
        ]).then(function(data){
            if (data.start == 'y'){
                // console.log('yea
              
               console.log(wordObject.display());
                
                //texas, is  used in this function and called
                wordObject.makeAndPushLettersIntoWord();
                
                askLetter();           
                 } else {
                    console.log('SEE YOU LATER!')
                    return;
                 }
        })
};

// askLetter();
readyToPlay();