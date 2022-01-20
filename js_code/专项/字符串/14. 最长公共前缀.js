`
思路：
应该知道最长公共子串的长度，最多等于字符数组strs中，长度最短的字符串的长度
先从字符串数组strs中找到长度最短的那个成员s
然后对s遍历，截取前缀，一一判断是否同样时strs数组中其他成员的前缀
`
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {


  let minLength=Infinity
  let minStr="",ans=""
  for(let s of strs){  //从字符串数组strs中找到长度最短的那个成员s
      minLength=Math.min(minLength,s.length)
      if(minLength===s.length){
          minStr=s
      }
  }

  for(let i=0;i<minLength;i++){   //对s遍历，截取前缀
      let temp=minStr.slice(0,i+1)
      let flag=true
      for(let s of strs){     //一一判断是否同样时strs数组中其他成员的前缀
          if(!s.startsWith(temp)) flag=false
      }
      if(flag) ans=temp
  }
  return ans
};

