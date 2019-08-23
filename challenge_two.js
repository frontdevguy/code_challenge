// Given a string, return a new string where each character  in ti is '('
// if the character appears only once in the orginal string, or ')' if the 
// character appears more than once in the original string
// # din => '((('
// # recede => '()()()'; 

const letterBracketCharacter = word => {
    const wordArray = word.split('');
    let repeatingLetter = [... new Set(wordArray.filter((letter,index,arr) => arr.lastIndexOf(letter) > index))];
    let letterBracket = '';
    for(letter of wordArray) {
        if(repeatingLetter.indexOf(letter) > -1) {
            letterBracket += ')';
        } else {
            letterBracket += '(';
        }
    }
    return letterBracket;
}

console.log(letterBracketCharacter('din')); // (((
console.log(letterBracketCharacter('recede')); // ()()()
