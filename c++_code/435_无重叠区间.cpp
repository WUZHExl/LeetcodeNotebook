#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;
bool cmp(vector<int> a,vector<int> b)
{
 return a[1]<b[1];
}
class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        if(intervals.empty()) return 0;
        int n=intervals.size();

        sort(intervals.begin(),intervals.end(),cmp);
        int counts=0,temp=intervals[0][1];
        for(int i=1;i<n;i++)
        {
            if(intervals[i][0]<temp)
            {
                counts++;
            }
            else
            {
                temp=intervals[i][1];
            }
        }
        printf("%d",counts);
        return counts;
    }
};


int main()
{
    Solution s;
    //vector<vector<int>> test={{1,2}, {2,3}, {3,4}, {1,3}};
    vector<vector<int>> test={{1,100},{11,22},{1,11},{2,12}};
    s.eraseOverlapIntervals(test);


    return 0;
}
