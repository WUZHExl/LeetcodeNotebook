

`
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
`
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

`
1.整体的思路是遍历字符串，遍历过程中将每行都看成新的字符串构成字符串数组，最后再将该数组拼接起来即可
2.如果 numRows==1 则说明当前字符串即为结果，直接返回
3.否则整个字符串需要经历，向下向右，向下向右，这样的反复循环过程，设定 down 变量表示是否向下，loc 变量表示当前字符串数组的下标
4.如果 down 为 true，则 loc+=1，字符串数组下标向后移动，将当前字符加入当前字符串中
5.如果 down 为 false，则表示向右，则 loc-=1，字符串数组下标向前移动，将当前字符加入当前字符串中
6.时间复杂度：O(n)，n为字符串s的长度
`

 var convert = function(s, numRows) {
      if(numRows===1) return s;

      const len = Math.min(s.length, numRows);
      const rows = [];
      for(let i = 0; i< len; i++) rows[i] = "";
      let loc = 0;
      let down = false;
  
      for(const c of s) {
          rows[loc] += c;
          if(loc == 0 || loc == numRows - 1) down = !down;
          loc += down ? 1 : -1;
      }
  
      let ans = "";
      for(const row of rows) {
          ans += row;
      }
      return ans;
  

};