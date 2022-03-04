/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {

  let str="1"
  for(let i=2;i<=n;i++){
      const sub=[]
      let pos=0
      let start=0
      while(pos<str.length){//遍历当前字符串
          while(pos<str.length&&str[pos]===str[start]){//查找连续相同的字符
              pos++
          }
          sub.push(''+(pos-start)+str[start])//将当前结果加入数组
          start=pos
      }
      str=sub.join('')//生成新的字符串
  }
  return str

};