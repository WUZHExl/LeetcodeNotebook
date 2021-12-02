/**
 * @param {string[]} tokens
 * @return {number}
 */

/*
为什么会用后缀表达式，因为使用后缀表达式就不需要括号了
主要的解题思路是栈中只保存操作数，操作符不需要保存在栈中
如果遇到的是一个操作数，则将其入栈；如果遇到的是一个操作符，
则两个操作数出栈并执行相应的运算，然后计算结果入栈
*/


 var evalRPN = function(tokens) {

    const calculate=(num1,num2,operator) => {
      switch (operator) {
        case "+": return num1 + num2
        case "-": return num1 - num2
        case "*": return num1*num2
        case "/": return parseInt(num1/num2,10)
      }
    }

    let stack=[]
    for(let t of tokens) {
      switch(t){
        // 如果是符号取出栈中数字进行计算
        case "+":
        case "-":
        case "*":
        case "/":
          let num1 =stack.pop()
          let num2 =stack.pop()
          stack.push(calculate(num2,num1,t))
          break;
        default:
          // 若是数字入栈
          stack.push(parseInt(t,10))
      }
    }
    return stack.pop()
};