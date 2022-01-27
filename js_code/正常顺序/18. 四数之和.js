
`
给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 
`
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {


  nums.sort((a,b)=>a-b)

   /*
注意：调用这个函数之前一定要先给 nums 排序
n 填写想求的是几数之和，start 从哪个索引开始计算（一般填 0），target 填想凑出的目标和
 */
const nSumTarget = (nums, n, start, target) => {
  let size = nums.length;
  let res = [];
  // 至少是 2Sum，且数组大小不应该小于 n
  if (n < 2 || size < n) return res;
  // 2Sum 是 base case
  if (n == 2) {
    // 双指针那一套操作
      let lo = start,
        hi = size - 1;
      while (lo < hi) {
        let sum = nums[lo] + nums[hi];
        let left = nums[lo],
          right = nums[hi];
        if (sum < target) {
          while (lo < hi && nums[lo] == left) lo++;
        } else if (sum > target) {
          while (lo < hi && nums[hi] == right) hi--;
        } else {
          res.push([left, right]);
          while (lo < hi && nums[lo] == left) lo++;
          while (lo < hi && nums[hi] == right) hi--;
        }
      }
    } else {
      // n > 2 时，递归计算 (n-1)Sum 的结果
      for (let i = start; i < size; i++) {
        let sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
        for (let arr of sub) {
          arr.push(nums[i]);
          res.push(arr);
        }
        while (i < size - 1 && nums[i] == nums[i + 1]) i++;
      }
    }
    return res;
  };
  // n 为 4，从 nums[0] 开始计算和为 target 的四元组
  return nSumTarget(nums, 4, 0, target);

};