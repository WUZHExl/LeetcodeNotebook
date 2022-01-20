/**
 * @param {number[]} nums
 * @return {number}
 */


`
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
说明：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗
`
`
异或运算的特点
主要因为异或运算有以下几个特点：
一个数和 0 做 XOR 运算等于本身：a⊕0 = a
一个数和其本身做 XOR 运算等于 0：a⊕a = 0
XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
`

 var singleNumber = function(nums) {

  let ans=0
  for(let n of nums){
      ans^=n
  }
  return ans
};