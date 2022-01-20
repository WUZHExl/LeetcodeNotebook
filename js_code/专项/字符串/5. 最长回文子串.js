/**
 * @param {string} s
 * @return {number}
 */

`
对于字符串来说，每一个字符都可以作为回文串的中心点（回文串的中心点的意思是从中间向两边扩散开来）
既然每个一字符都可以作为回文串的中心点，回文串又有奇数回文串和偶数回文串
遍历字符串的每个字符，分别对奇数回文串和偶数回文串取最长的
`

 var longestPalindrome = function (s) {
  // 思路：从中间开始向两边扩散来判断回文串
  /**
   *
   * @param {*} s
   * @param {*} l 左边界
   * @param {*} r 右边界
   */

  // 截取重是s[i]~s[j]开始的最长回文串
  let palindrome = (s, l, r) => {
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      // 向两边展开
      l--;
      r++;
    }
    // 返回以s[l]和s[r]为中心的最长回文串
    return s.substr(l + 1, r - l - 1);
  };

  
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // 以s[i]为中心的最长回文串
    let s1 = palindrome(s, i, i);
    // 以s[i]和s[i+1]为中心的最长回文串
    let s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};




//动态规划
var longestPalindrome = function(s){
  let n=s.length;
  if(n<2) return s;
  let Maxlen=1,dp=[],begin=0
  for(i=0;i<n;i++) {
    dp[i]=new Array(n)
    dp[i][i]=true
  }

  //先枚举长度
  for(L=2;L<=n;L++)
  {
    //枚举左边界
    for(i=0;i<n;i++){
      //确定右边界
      let j=L+i-1;
      if(j>=n) break;
      if(s[i]!==s[j]) dp[i][j]=false
      else{
        if(j-i<3) dp[i][j]=true
        else dp[i][j]=dp[i+1][j-1]
      }

      if(dp[i][j]&&j-i+1>Maxlen){
        Maxlen=j-i+1
        begin=i;
      }

    }
  }

  return s.substr(begin,Maxlen)

}

