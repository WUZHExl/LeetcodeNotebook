/**
 * @param {number[]} nums
 * @return {number}
 */

//  在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字
 var singleNumber = function(nums) {
  let m=new Map()
  for(let n of nums){
      m.set(n,m.has(n)?m.get(n)+1:1)
  }
  for(let [k,v] of m){
      if(v===1) return k
  }
};