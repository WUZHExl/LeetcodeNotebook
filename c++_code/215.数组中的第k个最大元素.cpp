/*
 * @lc app=leetcode.cn id=215 lang=cpp
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
// 快搜选择
#include <vector>
using namespace std;
class Solution {
public:
    //对一个升序数组来说，第一大的元素就是倒数第一个即n-1,
    //第k大的元素是倒数第k个，即n-k
    int findKthLargest(vector<int>& nums, int k) {
        int left=0,right=nums.size()-1,target=nums.size()-k;
        while(left<right)
        {
            int ans=quick_sort(nums,left,right);
            if(ans==target)
            {
                return nums[ans];
            }
            else if(ans<target)
            {
                left=ans+1;
            }
            else if(ans>target)
            {
                right=ans-1;
            }
        }
        return nums[left];
        
    }

    //快排序数组
    int quick_sort(vector<int>& nums,int l,int r)
    {
        int temp=nums[l];
        while(l<r)
        {
            //从右向左，找到小于target值的那个，
            //把该值放到target值暂存的那个位置。
            while(l<r&&nums[r]>temp) r--;
            nums[l]=nums[r];
            while(l<r&&nums[l]<=temp) l++;
            nums[r]=nums[l];
        }
        nums[l]=temp;
        return l;
    }
};
// @lc code=end

