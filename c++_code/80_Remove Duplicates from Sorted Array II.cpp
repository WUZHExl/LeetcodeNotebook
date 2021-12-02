#include <vector>
#include <stdio.h>
#include <windows.h>
using namespace std;
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
       if (nums.empty()) return 0;
       int counts=1,index=0;
       for(int i=1;i<nums.size();i++)
       {
           if(nums[index]!=nums[i]&&counts<=2)
           {
               nums[++index]=nums[i];
               counts=1;
           }
           else if(nums[index]==nums[i]&&counts<2){
               counts++;
               nums[++index]=nums[i];
           }


       }
       for(int i=0;i<index+1;i++) {printf("%d",nums[i]);}

       return index+1;
    }
};

int main()
{
    Solution s;
    vector<int> num={1,1,1,2,3,3};
    s.removeDuplicates(num);
    system("pause");
    return 0;
}

