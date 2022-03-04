`
给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
回文字符串 是正着读和倒过来读一样的字符串。
子字符串 是字符串中的由连续字符组成的一个序列。
具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
`
/**
 * @param {string} s
 * @return {number}
 */

// 枚举出所有的子串，然后再判断这些子串是否是回文；
 var countSubstrings = function(s) {
  const isHuiwen=str=>{
      let n=str.length
      for(let i=0;i<Math.floor(n/2);i++){
          if(str[i]!==str[n-i-1]) return false
      }
      return true
  }

  if(s.length===0) return 0

  let sum=0
  let l=0,r=1
  while(l<s.length){
      if(r<=s.length){
          let temp=s.slice(l,r)
          if(isHuiwen(temp)){
               sum++
          }
          r++
      }
      else{
          l++
          r=l+1
      }
  }
  return sum

};


// 中心扩展法
`
枚举每一个可能的回文中心，然后用两个指针分别向左右两边拓展，当两个指针指向的元素相同的时候就拓展，否则停止拓展
`
 var countSubstrings = function(s) {
  // 判断空串情况
  if (s == null || !s.length) {
    return 0;
  }
  const countPalindrome = (s, start, end) => {
    let count = 0;
    // 从字符串的中心开始向两端延伸
    // 如果存在一个长度为m的回文子字符串，则分别再向该回文的两端延伸一个字符，并判断回文前后的字符是否相同
    while (start >= 0 && end < s.length && s[start]=== s[end]) {
      count++;
      start--;
      end++;
    }
    return count;
  };

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // 回文的长度既可以是奇数，也可以是偶数
    // 长度为奇数的回文的对称中心只有一个字符
    // 第i个字符本身可以成为长度为奇数的回文子字符串的对称中心
    count += countPalindrome(s, i, i);
    // 长度为偶数的回文的对称中心只有两个字符
    // 第i个字符和第i+1个字符可以一起成为长度为偶数的回文子字符串的对称中心
    count += countPalindrome(s, i, i + 1);
  }
  return count;
};



