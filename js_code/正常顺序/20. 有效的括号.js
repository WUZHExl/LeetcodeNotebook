`
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
`

`
判断是左括号就入栈
如果不是左括号，就从把当前元素与栈顶元素匹配，如果匹配，则表示匹配，栈顶元素出栈；如果不匹配，则直接退出返回false了
循环完字符串所有字符后，都匹配，那是否是有效的括号就取决于是否栈中有剩余的左括号了，如果没有则为有效括号

`

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

  let left=[] //栈
  const leftOf=c=>{
    if(c==="}") return "{"
    else if(c===")") return "("
    else return "["
  }

  for(let c of s){
    // 如果是左括号入栈
    if(c==="{"||c==="("||c==="["){
      left.push(c)
    }else
    {
        // 如果是右括号
        if(left.length&&leftOf(c)===left[left.length-1]){
          left.pop()
        }else {
          return false
        }
    }
  }

  return !left.length
};