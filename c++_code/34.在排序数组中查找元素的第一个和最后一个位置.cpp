/*
 * @lc app=leetcode.cn id=34 lang=cpp
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
#include <vector>
using namespace std;
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
          if(nums.size()==0) return {-1,-1};
          int first=findfirst(nums, target);
          int last=findlast(nums, target)-1;
          if(first==nums.size()||nums[first]!=target) {return {-1,-1};}
          return {first, last};

    }
    int findfirst(vector<int>& nums,int target) {
        //找第一个大于等于target的元素
        //有可能返回大于目标值的元素
        int l=0,r=nums.size();
        while(l<r) {
            int mid=l+(r-l)/2;
            if(nums[mid]>=target)
            {
                //如果nums[mid]>=target,则目标位置一定在mid处或mid左边
                r=mid;
            }
            else if(nums[mid]<target)
            {
                //若nums[mid]<target,则目标位置一定在mid右侧
                l=mid+1;
            }
          
        }
        return l;
    }

    int findlast(vector<int>& nums,int target) {
        //找第一个大于target的元素
        int l=0,r=nums.size();
        while(l<r) {
            int mid=l+(r-l)/2;
            if(nums[mid]>target)
            {
                //如果nums[mid]>target,则目标位置一定在mid处或mid左边
                r=mid;
            }
            else if(nums[mid]<=target)
            {
                //若nums[mid]<target,则目标位置一定在mid右侧
                l=mid+1;
            }
          
        }
        return r;
    }
    
};
// @lc code=end

