/**
 * @param {string[]} tokens
 * @return {number}
 */
`
根据 逆波兰表示法，求表达式的值。

有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

注意 两个整数之间的除法只保留整数部分。

可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
`

`
使用栈，遇到数字入栈，遇到计算符，则当前栈中的后两位出栈，将计算结果入栈
`
 var evalRPN = function(tokens) {

  let stack=[]
  for(let t of tokens){

      if(t==='+'||t==='-'||t==='*'||t==='/'){
          let tempa=stack.pop(),tempb=stack.pop()
          if(t==='+') stack.push(tempa+tempb)
          else if(t==='-') stack.push(tempb-tempa)
          else if(t==='*') stack.push(tempb*tempa)
          else stack.push((tempb/tempa)|0)
      }else{
          stack.push(Number(t))
      }
  }
  return stack.pop()

};