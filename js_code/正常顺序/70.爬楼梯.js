/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
     let pre1=0,pre2=1,next;
     for(i=1;i<=n;i++){
        next=pre1+pre2;
        pre1=pre2;
        pre2=next;
     }
     return next;
};
// @lc code=end

