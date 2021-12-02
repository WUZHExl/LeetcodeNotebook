#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> ans;
        int temp=0;
        for(int i=0;i<nums.size();i++)
        {
            for(int j=1;j<nums.size();j++)
            {
                if(nums[i]+nums[j]==target&&i!=j)
                {
                    ans.push_back(i);
                    ans.push_back(j);
                    temp=1;
                    break;
                }
            }
            if(temp==1) break;
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
