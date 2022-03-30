/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
`
实现 strStr() 函数。
给你两个字符串 haystack 和 needle ，
请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
`
 var strStr = function(haystack, needle) {

  let ans=haystack.indexOf(needle)
  return ans
};


//KMP算法
 var strStr = function (haystack, needle) {
  if (needle.length === 0)
      return 0;

  const getNext = (needle) => {//获取next数组
      let next = [];
      let j = 0;
      next.push(j);

      for (let i = 1; i < needle.length; ++i) {
          while (j > 0 && needle[i] !== needle[j])//不等时，回退
              j = next[j - 1];
          if (needle[i] === needle[j])
              j++;
          next.push(j);
      }

      return next;
  }

  let next = getNext(needle);
  let j = 0;
  for (let i = 0; i < haystack.length; ++i) {
      while (j > 0 && haystack[i] !== needle[j])
          j = next[j - 1];
      if (haystack[i] === needle[j])
          j++;
      if (j === needle.length)
          return (i - needle.length + 1);
  }

  return -1;
};