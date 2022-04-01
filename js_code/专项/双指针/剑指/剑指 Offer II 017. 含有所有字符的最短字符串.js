/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

//  给定两个字符串 s 和 t 。返回 s 中包含 t 的所有字符的最短子字符串。如果 s 中不存在符合条件的子字符串，则返回空字符串 "" 。
//  如果 s 中存在多个符合条件的子字符串，返回任意一个。
// 注意：本题与主站 76 题相似（本题答案不唯一）：https://leetcode-cn.com/problems/minimum-window-substring/

 var minWindow = function(s, t) {
  let count={},window={}
  for(let i of t) count[i]=(count[i]||0)+1
  let l=0,r=0,valid=0
  let ans="",minLength=s.length
  while(r<s.length){
      let c=s[r]  //当前进入窗口的字符
      r++
      if(count[c]){       //若该字符出现在所需验证的字符集中
          window[c]=(window[c]||0)+1 //统计当前字符在窗口出现的频数
          if(window[c]===count[c]) valid++  //且出现频次相同，则验证字符+1
      }

      while(r-l>=t.length&&valid===Object.keys(count).length){//找到一个可行解后左边界右移
          minLength=Math.min(minLength,r-l)
          ans=minLength===r-l?s.slice(l,r):ans
          let d=s[l] //当前出窗口的字符
          l++
          if(count[d]){
              if(window[d]===count[d]) valid--
              window[d]--
          }
      }

  }
  return ans

};