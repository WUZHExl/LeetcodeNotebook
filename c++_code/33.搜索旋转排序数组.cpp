/*
 * @lc app=leetcode.cn id=33 lang=cpp
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
#include <stdio.h>
#include <vector>
using namespace std;
class Solution {
public:
    int search(vector<int>& nums, int target) {
    int l=0,n=nums.size(),r=n-1;
    if(n==0) return -1;
    if(n==1) return nums[0]==target?0:-1;
    while(l<=r)
    {
        int mid=l+(r-l)/2;
        if(nums[mid] == target) return mid; 
        else if(nums[mid]<=nums[r]) //说明右区间是有序的
        {
            if(nums[mid]<target&&nums[r]>=target) 
            {//右区间，则在右区间搜索
                l=mid+1;
            }
            else
            {//否则，在左区间搜索
                r=mid-1;
            }
        }
        else if(nums[mid]>=nums[l])//说明左区间是有序的
        {
           if(target>=nums[l]&&target<nums[mid])
           {
               r=mid-1;
           }
           else
           {
               l=mid+1;
           }
        }
    }
    return -1;
    }
};
// @lc code=end

