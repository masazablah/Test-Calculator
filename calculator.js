// calculator.js
function calc(...args) {
    if (args.length < 3 || args.length % 2 === 0) {
      throw new Error('Invalid input');
    }
  
    let result = args[0];
    for (let i = 1; i < args.length; i += 2) {
      const operator = args[i];
      const operand = args[i + 1];
  
      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          if (operand === 0) {
            throw new Error('Division by zero');
          }
          result /= operand;
          break;
        default:
          throw new Error('Invalid operator');
      }
    }
    return result;
  }
  
  module.exports = calc;
  