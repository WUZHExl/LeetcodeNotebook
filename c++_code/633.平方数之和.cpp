/*
 * @lc app=leetcode.cn id=633 lang=cpp
 *
 * [633] 平方数之和
 */

// @lc code=start
#include <stdio.h>
#include <math.h>
// #include <

class Solution {
public:
    bool judgeSquareSum(int c) {
        long slow=0,fast=floor(sqrt(c*1.0));
        while(slow*slow+fast*fast!=c)
        {
            long sum=slow*slow+fast*fast;
            if(sum>c)
            {
                fast--;
            }
            else if(sum<c)
            {
                slow++;
            }
            if(slow>fast)
            {
                printf("false");
                return false;
            }
        }
        printf("true");
        return true;
    }
};
// @lc code=end
int main()
{
    Solution s;
    s.judgeSquareSum(1000);
}

