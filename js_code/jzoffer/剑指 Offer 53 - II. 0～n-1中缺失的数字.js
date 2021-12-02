/**
 * @param {number[]} nums
 * @return {number}
 */
//  var missingNumber = function(nums) {
//   let k=nums.length,mp=new Map()
//   for(let i=0;i<=k;i++) mp.set(i,false)
//   for(let i of nums){
//       mp.set(i,true)
//   }
//   for(let s of mp){
//       if(s[1]===false) return s[0]
//   }
// };


/**
排序数组中的搜索问题，首先想到 二分法 解决。
根据题意，数组可以按照以下规则划分为两部分。
左子数组： nums[i]=i ；
右子数组： nums[i]!=i ；
缺失的数字等于 “右子数组的首位元素” 对应的索引；因此考虑使用二分法查找 “右子数组的首位元素” 。
 */



var missingNumber = function(nums) {
  let i=0,j=nums.length-1
  while(i<=j){
    let mid=Math.floor((j+i)/2)
    if(nums[mid]===mid) i=mid+1
    else j=mid-1
  }[]
  return i
};


var missingNumber = function(nums) {
  if(nums[0]===1) return 0
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==i) return i
  }
  return nums.length
};