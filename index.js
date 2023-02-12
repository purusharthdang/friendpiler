const compiler =require('./compiler') 
const input = '(result 2 (sub 4 3))'
const output = compiler(input)
console.log(JSON.stringify(output, null, 2))