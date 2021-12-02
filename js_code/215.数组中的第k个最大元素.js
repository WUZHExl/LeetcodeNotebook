/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//快速选择
/*
快速选择一般用于求解 k-th Element 问题，可以在 O(n) 时间复杂度，O(1) 空间复杂度完成求
解工作。快速选择的实现和快速排序相似，不过只需要找到第 k 大的枢（pivot）即可，不需要对
其左右再进行排序。
*/

var findKthLargest = function(nums, k) {


  //快速选择
  const quick_sort=(nums,l,r)=>{
    let first =l+1,last =r,key=nums[l];
    while(1){
      while(first<r&&nums[first]<=key) first++;
      while(l<last&&nums[last]>=key) last--;
      if(first>=last) break;

      [nums[first], nums[last]]=[nums[last],nums[first]]
    }
    [nums[l], nums[last]]=[nums[last],nums[l]]
    return last

  }

  let l=0,r=nums.length-1,target=nums.length-k
  while(l<r){
    let mid=quick_sort(nums,l,r)
    if(mid===target){
      return nums[mid]
    }else if(mid<target){
      l=mid+1
    }else if(mid>target){
      r=mid-1
    }
  }
  return nums[l]

};
// @lc code=end

