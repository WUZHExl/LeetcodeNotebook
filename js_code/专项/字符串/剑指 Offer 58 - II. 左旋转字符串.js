/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
`
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。
比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
`
`
可以通过局部反转+整体反转 达到左旋转的目的。
具体步骤为：
反转区间为前n的子串
反转区间为n到末尾的子串
反转整个字符串
`
 var reverseLeftWords = function(s, n) {

  const reverseWord=(str,start,end)=>{
      while(start<end){
          [str[start],str[end]]=[str[end],str[start]]
          start++
          end--
      }
  }
  let len=s.length
  let arr=s.split('')
  reverseWord(arr,0,n-1)
  reverseWord(arr,n,len-1)
  reverseWord(arr,0,len-1)
  return arr.join('')
};