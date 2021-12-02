#include <stdio.h>
#include <vector>
#include <algorithm>
#include<iostream>
using  namespace std;
class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
     sort(g.begin(),g.end());
     sort(s.begin(),s.end());
     int children=0,cooikes=0;
     while(children<g.size()&&cooikes<s.size())
     {
        if(g[children]<=s[cooikes])
        {
            children++;
        }
        cooikes++;

     }
     //return children;
     printf("%d",children);
    }
};

int main()
{
   Solution a;
  // int b[4]={1,2,3,4};
   //vector<int> g(b,b+1),s(b,b+2);
    vector<int> g(2,1),s(3,1);

   a.findContentChildren(g,s);
   return 0;

}
