module.exports = parser = (tokens) => {
    let current  = 0;
    const walk  = () => {
    let token = tokens[current]

    if (token.type === 'numbers') {
      current++;
      return {
        type: 'NumberLiteral',
        value: token.value
      };
    }
    if(token.type === 'paren' && token.value === '('){
        token = tokens[++current]
        const expression = {
            type : 'CallExpression',
            name : token.value,
            params : []
        }
        token = tokens[++current];
        while (token.value !== ')') {
            expression.params.push(walk());
            token = tokens[current];
        }
      current++;
      return expression;
    }
        throw new TypeError(`Unknown token: '${token.type}'`);
    }
    const syntaxTree = {
        type: 'Program',
        body : [walk()]
    };
    return syntaxTree
}