const LETTERS = /[a-z]/i;
const WHITESPACE = /\s/;
const NUMBERS = /\d/;
module.exports =  tokenizer = (input)=> {
    const tokens = [];
    let current = 0;
    while(current < input.length){
        let char = input[current];
        if(char === '(' || char === ')'){
            tokens.push({
                type : 'paren',
                value : char
            })
            current++;
            continue;
        }
        if(LETTERS.test(char)){
            let value = '';
            while(LETTERS.test(char)){
                value += char;
                char = input[++current];
            }
            tokens.push({
                type : 'name',
                value
            })
            continue;
        }
        if(NUMBERS.test(char)){
            let value = '';
            while(NUMBERS.test(char)){
                value += char;
                char = input[++current];
            }
            tokens.push({
                type : 'numbers',
                value
            })
            continue;
        }
        if(WHITESPACE.test(char)){
            current++;
            continue;
        }
        throw new TypeError(`Sorry, I don't recognize the character : '${char}'`)
    }
    return tokens;
}