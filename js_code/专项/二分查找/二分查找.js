/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @param target int整型 
 * @return int整型
 */

`
给定一个 元素升序的、无重复数字的整型数组 nums 和一个目标值 target ，
写一个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否则返回 -1
`
 function search( nums ,  target ) {
  // write code here
  let l=0,r=nums.length-1
  while(l<=r){
      let mid=Math.floor((r-l)/2)+l
      if(nums[mid]===target) return mid
      else if(nums[mid]<target) l=mid+1
      else r=mid-1
  }
  return -1
}
module.exports = {
  search : search
};