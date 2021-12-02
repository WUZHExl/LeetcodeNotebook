#include <vector>
#include <stdio.h>
using namespace std;
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
       if (nums.empty()) return 0;
       int counts=0;
       for(int i=1;i<nums.size();i++)
       {
           if(nums[counts]!=nums[i])
           {
               nums[++counts]=nums[i];
           }
       }
       for(int i=0;i<counts+1;i++) {printf("%d",nums[i]);}

       return counts+1;
    }
};

int main()
{
    Solution s;
    vector<int> num={1,1,2};
    s.removeDuplicates(num);
}
