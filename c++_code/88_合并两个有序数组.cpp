#include <vector>
#include <stdio.h>
using namespace std;
//逆向双指针
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
         int i=m-1,j=n-1,index=m+n-1;
         while(i>=0&&j>=0)
         {
           nums1[index--]=nums1[i]>=nums2[j]?nums1[i--]:nums2[j--];
         }
         while(j>=0)
         {
           nums1[index--]=nums2[j--];
         }
         
         for(int x=0;x<nums1.size();x++) {printf("%d",nums1[x]);}

    }
};

int main(){
Solution s;
vector<int> nums1={0},nums2={2};
s.merge(nums1,0,nums2,1);

}