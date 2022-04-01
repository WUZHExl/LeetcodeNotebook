/**
 * @param {string} s
 * @return {number}
 */
//  给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。

 var lengthOfLongestSubstring = function(s) {

  let window={}
  let l=0,r=0,ans=0
  while(r<s.length){
      let c=s[r]
      r++
      window[c]=(window[c]||0)+1
      while(window[c]>1){
          let d=s[l]
          l++
          window[d]--
      }
      ans=Math.max(ans,r-l)
  }
  return ans
};