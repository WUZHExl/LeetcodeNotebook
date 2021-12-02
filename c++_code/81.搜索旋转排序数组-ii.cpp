/*
 * @lc app=leetcode.cn id=81 lang=cpp
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
#include <stdio.h>
#include <vector>
using namespace std;
class Solution {
public:
    bool search(vector<int>& nums, int target) {
    //     for (int i = 0; i < nums.size();i++)
    //     {
    //         if (nums[i] == target)
    //         {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    int l=0,n=nums.size(),r=n-1;
    if(n==0) return false;
    if(n==1) return nums[0]==target;
    while(l<=r)
    {
        int mid=l+(r-l)/2;
        if(nums[mid] == target) return true;
        if(nums[mid]==nums[l]&&nums[mid]==nums[r]) 
        {
            l++;
            r--;
        }    
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
    return false;

    }

};
// @lc code=end

