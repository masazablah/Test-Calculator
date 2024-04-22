// calculator.js
function calc(...args) {
  if (args.length < 3 || args.length % 2 === 0) {
    throw new Error('Invalid input type');
  }


  for (let i = 0; i < args.length; i += 2) {
      const operator = args[i+1];
      const operand = args[i];

      if(typeof(operand)!= 'number'){
        throw new Error('Invalid input type');
      }
      
      if (operand > 1000) {
        continue;
      }

      switch (operator) {
          case '*':
              args[i+2]*= operand;
              args[i] = '';
              args[i+1] = '';
              break;
          case '/':
              if(args[i+2] === 0){
                  throw new Error('Division by zero');
              }
              
              args[i+2]=operand/args[i+2];
              args[i] = '';
              args[i+1] = '';
              break;
      }
  }
      args = args.filter(item => item !== ''); //{50,'+',2,'+',1}
      let result = +args[0];

      for (let i = 1; i < args.length; i += 2) {
          const operator = args[i];
          const operand = +args[i + 1]; 


          if (operand > 1000) {
            continue;
          }

    switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;

      default:
        throw new Error('Invalid operator');
    }
  }
  return result;
}

module.exports = calc;