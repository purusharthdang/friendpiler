const tokenizer =require ('./tokenizer')
const parser = require('./parser')
const transfomer = require('./transformer')
module.exports =  compiler = (input) => {
const tokens = tokenizer(input);
const syntaxTree = parser(tokens)
return syntaxTree
}