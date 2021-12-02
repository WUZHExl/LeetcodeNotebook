#include <vector>
#include <stdio.h>
#include <algorithm>
using namespace std;

class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
     sort(g.begin(), g.end());
     sort(s.begin(), s.end());
     int i=0,j=0,num=0;
     while(i<g.size()&&j<s.size())
     {
         if(s[j]>=g[i])
         {
           i++;
           j++;
           num++;
         }
         else
         {
           j++;
         }
     }
     printf("%d",num);
     return num;
    }
};

int main()
{
  Solution s;
  vector<int>  a={10,9,8,7},b={5,6,7,8};
  s.findContentChildren(a,b);
}