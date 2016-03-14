//get list of non-shared chars.
//create objects of each string
function processData(input) {
    'use strict';
    const strings = input.split('\n');
    const strObj = {};
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    for(let i in strings){ //each string.
        strObj["str"+i]={}; //create string object
        for(let letter of strings[i]){
            let letterIndex = alph.indexOf(letter); //grab the alph index of the letter.
            if (!strObj["str"+i][alph[letterIndex]]){ //check if string object letter doesn't exist in the string object.
                strObj["str"+i][alph[letterIndex]] = 1; //if true then add it with a value of 1.
            } else{
                strObj["str"+i][alph[letterIndex]] = +1; //or just up it's value if it's already there.
            }
        }
    }
    //now we have a string object of letter counts for each string in the strObj object.
    //first find out how many unique letters to delete. then check if any duplicate letters should be deleted.
    for(let each of strObj){ //loop through each string object.
        
    }
    console.log(strObj);
} 