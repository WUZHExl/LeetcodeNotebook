/**
 * @param {string} digits
 * @return {string[]}
 */
`
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
`
 var letterCombinations = function(digits) {

  const letterMap= [
  "", // 0
  "", // 1
  "abc", // 2
  "def", // 3
  "ghi", // 4
  "jkl", // 5
  "mno", // 6
  "pqrs", // 7
  "tuv", // 8
  "wxyz", // 9
  ];
  
  if(!digits) return []
  let result=[],path=[]
  // 确定回溯函数参数
  //index表示此时遍历到digits的第几个数字，即树的第几层
  const dfs=(digits,index)=>{
      // 确定终止条件
      if(path.length===digits.length){
          result.push(path.join(''))
          return
      }
      let str=letterMap[digits[index]] //str表示当前数字对应的字符串
      for(let i=0;i<str.length;i++){   //该for循环表示在某一层，遍历的长度
          path.push(str[i])
          dfs(digits,index+1)
          path.pop()
      }
  }
  dfs(digits,0)
  return result 

};