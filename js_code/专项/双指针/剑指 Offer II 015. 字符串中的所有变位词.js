/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 给定两个字符串 s 和 p，找到 s 中所有 p 的 变位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// 变位词指字母相同，但排列不同的字符串。

// 注意：本题与主站 438 题相同： https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/


 var findAnagrams = function(s, p) {
  let count={},windonw={}
  for(let i of p) count[i]=(count[i]||0)+1
  let l=0,r=0,ans=[],valid=0
  while(r<s.length){
      let temp=s[r]
      r++
      if(count[temp]){//如果此时的字符在p中
          //更新当前字符在s中出现的次数
          windonw[temp]=(windonw[temp]||0)+1
          if(windonw[temp]===count[temp]) valid++
      }
      while(r-l>=p.length){
          if(valid===Object.keys(count).length) ans.push(l)
          let d=s[l]
          l++
          if(count[d]){
              //若移出窗口的字符巧好匹配，那么验证数量-1
              if(windonw[d]===count[d]) valid--
              //当前窗口字符中d出现次数-1
              windonw[d]--
          }
      }
  }
  return ans

};