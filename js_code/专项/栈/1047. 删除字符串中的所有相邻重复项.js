/**
 * @param {string} s
 * @return {string}
 */
`
给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
`
//栈
var removeDuplicates = function(s) {

  let stack=[s[0]]
  for(let i=1;i<s.length;i++){

      if(s[i]===stack[stack.length-1]){
          stack.pop()
      }else{
          stack.push(s[i])

      }
  }
  return stack.join('')

};