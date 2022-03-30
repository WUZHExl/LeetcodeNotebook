/**
 * @param {string} s
 * @return {boolean}
 */
`
给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
`
//暴力枚举
//若s可重复，遍历取一半即可
 var repeatedSubstringPattern = function(s) {

  let len=s.length
  for(let i=0;i<Math.floor(len/2);i++){
      for(let j=i+1;j<Math.floor(len/2)+1;j++){
          let temp=s.slice(i,j)
          let num=Math.floor(len/(j-i))
          if(temp.repeat(num)===s&&temp!==s) {
              return true
          }
      }
  }
  return false
};

//KMP算法
var repeatedSubstringPattern = function (s) {
  if (s.length === 0)
      return false;

  const getNext = (s) => {
      let next = [];
      let j = 0;

      next.push(j);

      for (let i = 1; i < s.length; ++i) {
          while (j > 0 && s[i] !== s[j])
              j = next[j - 1];
          if (s[i] === s[j])
              j++;
          next.push(j);
      }

      return next;
  }

  let next = getNext(s);

  if (next[next.length - 1] !== 0 && s.length % (s.length - next[next.length - 1]) === 0)
      return true;
  return false;
};