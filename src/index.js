const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': '*'
};

function decode(expr) {
    let arr = [...expr];
    let dot = '10';
    let dashes = '11';
    let space = '**';
    let arrOfLetters = [];
    while (arr.length) {
        let arrOfPairs = [];
        for (let i = 0; i < 5; i++) {
            arrOfPairs.push(arr.splice(0, 2).join(''));
        }
        arrOfLetters.push(arrOfPairs)
    }
    let arrOfWords = arrOfLetters.map(letter => {
        let res = letter.map(item => {
            if (item === '11') return item.replace(/11/, '-');
            if (item === '10') return item.replace(/10/, '.');
            return item.replace(/00/ig, '');
        });
        return res.join('')
    });
    let res = arrOfWords.map(word => {
        return MORSE_TABLE[word]
    });
    return res.join('').split('*').join(' ')
}

module.exports = {
    decode
};
