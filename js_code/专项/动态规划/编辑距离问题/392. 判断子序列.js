/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
`
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
`
//动态规划
var isSubsequence = function(s, t) {

  //dp[i][j] 表示以下标i-1为结尾的字符串s，和以下标j-1为结尾的字符串t，相同子序列的长度为dp[i][j]
  let [len1,len2]=[s.length,t.length]
  let dp=new Array(len1+1).fill().map(()=>new Array(len2+1).fill(0))
  for(let i=1;i<=len1;i++){
      for(let j=1;j<=len2;j++){
          if(s[i-1]===t[j-1]){
              //t中找到了一个字符在s中也出现了
              dp[i][j]=dp[i-1][j-1]+1
          }else{
              //此时相当于t要删除元素，t如果把当前元素t[j - 1]删除，
              //那么dp[i][j] 的数值就是 看s[i - 1]与 t[j - 2]的比较结果了，即：dp[i][j] = dp[i][j - 1];
              dp[i][j]=dp[i][j-1]
          }
      }
  }

  if(dp[len1][len2]===len1) return true
  return false
};

`
初始化两个指针 i 和 j，分别指向 s 和 t 的初始位置。每次贪心地匹配，匹配成功则 i 和 j 同时右移，
匹配 s 的下一个位置，匹配失败则 j 右移，i 不变，尝试用 t 的下一个字符匹配 s。
最终如果 i 移动到 s 的末尾，就说明 s 是 t 的子序列。
`
//双指针
var isSubsequence = function(s, t) {

  let [m,n]=[s.length,t.length]
  let i=0,j=0
  while(i<m&&j<n){
      if(s[i]===t[j]){
          i++
          j++
      }else{
          j++
      }
  }
  return i===m
};