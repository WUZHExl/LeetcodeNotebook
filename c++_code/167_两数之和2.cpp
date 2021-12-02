#include <vector>
#include <stdio.h>
using namespace std;
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
           int i=0,j=numbers.size()-1;
           vector<int> ans;
           while(i<j) {
             if(numbers[i]+numbers[j]==target)
             {
               ans.push_back(i+1);
               ans.push_back(j+1);
               break;
             }
             else if(numbers[i]+numbers[j]<target)
             {
               i++;
             }
             else if(numbers[i]+numbers[j]>target)
             {
               j--;
             }
           }
           printf("%d %d",i+1,j+1);
           return ans;
           
    }
};
int main(){
Solution s;
vector<int> t={2,7,11,15};
s.twoSum(t,9);
return 0;
}