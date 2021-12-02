#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        //好吧没想出来，下次再说，想在一个循环内解决
        vector<int> ans;
        int start=0,end=nums.size()-1;
        for(int i=0;i<nums.size();i++)
        {
            if(nums[start]+nums[end]==target)
            {
                ans.push_back(start);
                ans.push_back(end);
                break;
            }
            start++;
            end--;
        }



        for(int i=0;i<ans.size();i++) {printf("%d ",ans[i]);}
        return ans;

    }
};

int main()
{
    Solution s;
    vector<int> a={3,2,4};
    int t=6;
    s.twoSum(a,t);
    return 0;
}

