/*
 * @lc app=leetcode.cn id=69 lang=cpp
 *
 * [69] x 的平方根
 */

// @lc code=start
class Solution {
public:
    int mySqrt(int x) {
        int left=1,right=x,mid,ans;
        if(x==0) return 0;
        while(left<=right)
        {
            // mid=(left+right)/2;
            mid=left+(right-left)/2;
            ans=x/mid;
            if(ans==mid) return mid;
            else if(ans<mid) right=mid-1;
            else if(ans>mid) left=mid+1; 

        }
        return right;
    }
};
// @lc code=end

