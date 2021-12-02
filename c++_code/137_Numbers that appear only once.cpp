#include <vector>
#include <stdio.h>
#include <map>
using namespace std;

const int maxn=100000;
int hashtbale[maxn]={0};
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int temp;
        map<int,int> mp;
        for(int i=0;i<nums.size();i++)
        {
            mp[nums[i]]++;
        }
        for(int i=0;i<nums.size();i++)
        {
            if(mp[nums[i]]==1)
            {
                temp=nums[i];
                printf("%d",temp);
            }
        }
        
        return temp;

    }
};

int main()
{
    Solution s;
    vector<int> a={0,1,0,1,0,1,99,99,99,-2};
    s.singleNumber(a);
    return 0;
}
