`
给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。

你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间
`

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {

  let mp=new Array(nums.length).fill(0)

  for(let n of nums) mp[n]++
  for(let i=1;i<nums.length;i++){
      if(mp[nums[i]]!==1) return nums[i]
  }

};


// 对值域二分查找
const findDuplicate = (nums) => {
  let l = 1;
  let r = nums.length - 1; //题目注明了：nums.length == n + 1
  while (l < r) {
      const mid = (l + r) >>> 1;  // 求中间索引
      let count = 0;
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] <= mid) {
              count++;//记录小于mid的数的个数
          }
      }
      if (count > mid) {
          r = mid;
      } else {
          l = mid + 1;
      }
  }
  return l;
};
