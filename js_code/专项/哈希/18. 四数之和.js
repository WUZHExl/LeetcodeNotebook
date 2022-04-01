
`
给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] 
（若两个四元组元素一一对应，则认为两个四元组重复）：

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
`
四数之和，和15.三数之和 (opens new window)是一个思路，都是使用双指针法, 
基本解法就是在15.三数之和 (opens new window)的基础上再套一层for循环。

15.三数之和 (opens new window)的双指针解法是一层for循环num[i]为确定值，
然后循环内有left和right下标作为双指针，找到nums[i] + nums[left] + nums[right] == 0。

四数之和的双指针解法是两层for循环nums[k] + nums[i]为确定值，
依然是循环内有left和right下标作为双指针，找出nums[k] + nums[i] + nums[left] + nums[right] == target的情况，

三数之和的时间复杂度是$O(n^2)$，四数之和的时间复杂度是$O(n^3)$ 。
那么一样的道理，五数之和、六数之和等等都采用这种解法。
`

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    const len = nums.length;
    if(len < 4) return [];
    nums.sort((a, b) => a - b);
    const res = [];

    for(let i = 0; i < len - 3; i++) {
        // 去重i//因为排好了序，所以相邻的元素必然相邻
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        for(let j = i + 1; j < len - 2; j++) {
            // 去重j//因为排好了序，所以相邻的元素必然相邻
            if(j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1, r = len - 1;
            while(l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];
                if(sum < target) { l++; continue}
                if(sum > target) { r--; continue}
                res.push([nums[i], nums[j], nums[l], nums[r]]);
                while(l < r && nums[l] === nums[l+1]); l++
                while(l < r && nums[r] === nums[r-1]); r--
            }
        } 
    }
    return res;
};