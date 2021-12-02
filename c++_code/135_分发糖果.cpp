#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;
class Solution {
public:
    int candy(vector<int>& ratings) {
        int sum=0;
        int size1=ratings.size();
        vector<int> candy(ratings.size(),1);
        for(int i=1;i<size1;i++)
        {
            if(ratings[i]>ratings[i-1])
            {
                candy[i]=candy[i-1]+1;
            }
        }
        for(int i=size1-1;i>0;i--)
        {
            if(ratings[i-1]>ratings[i])
            {
                candy[i-1]=max(candy[i]+1,candy[i-1]);
            }
        }
        for(int i=0;i<size1;i++)
        {
            sum+=candy[i];
        }
        printf("%d",sum)
;       return sum;
    }
};

int main()
{
    Solution s;
    vector<int> test={5,3,7,3};
    s.candy(test);

    return 0;
}
