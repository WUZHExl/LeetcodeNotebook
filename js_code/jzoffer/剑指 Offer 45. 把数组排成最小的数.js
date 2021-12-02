/**
 * @param {number[]} nums
 * @return {string}
 */



/*
解题思路：
此题求拼接起来的最小数字，本质上是一个排序问题。
设数组 numsnums 中任意两数字的字符串为 xx 和 yy ，则规定 排序判断规则 为：

若拼接字符串 x + y > y + x ，则 x “大于” y ；
反之，若 x + y < y + x ，则 x “小于” y ；
x “小于” y 代表：排序完成后，数组中 x 应在 y 左边；“大于” 则反之。

*/
//  var minNumber = function(nums) {
//   // nums.sort((a,b)=>{
//   //     return (''+a+b)-(''+b+a)
//   // })
//   // ans=nums.reduce((a,b)=>String(a)+String(b),'')
//   // return ans
//   return nums.sort((a,b)=>(''+a+b)-(''+b+a)).join('')

// };


var minNumber = function(nums) {

  const quick_sort=(nums,l,r) => {
    if (l >= r) return
    let i = l,
      j = r
    tmp = nums[i]
    const pivot = l
    while (i < j) {
      while ('' + nums[j] + nums[pivot] - ('' + nums[pivot] + nums[j]) >= 0 && i < j) j--
      while ('' + nums[i] + nums[pivot] - ('' + nums[pivot] + nums[i]) <= 0 && i < j) i++
      tmp = nums[i]
      nums[i] = nums[j]
      nums[j] = tmp
    }
    nums[i] = nums[pivot]
    nums[pivot] = tmp
    quick_sort(nums, l, i - 1)
    quick_sort(nums, i + 1, r)
  
  }

  quick_sort(nums,0,nums.length-1)
  console.log(nums)
  return nums.join('')
  
};

minNumber([3,30,34,5,9])