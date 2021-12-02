/*
 * @lc app=leetcode.cn id=76 lang=cpp
 *
 * [76] 最小覆盖子串
 */

// @lc code=start


//查找的子串不是连续的，只需要包含即可！！！！！！
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
class Solution {
public:
    string minWindow(string s, string t) {
          int slow=0,fast=0,num=0,start=0,minlen=s.length()+1;
        //   vector<bool> hashtable(128,false);
        //   vector<int> hashnum(128,0);
          int hashnum[128]={0};
          bool hashtable[128]={false};
          for(int i=0;i<t.length();i++)
          {
              hashtable[t[i]]=true;
              hashnum[t[i]]++;
          }
          for(fast=0;fast<s.length();fast++)
          {

              if(hashtable[s[fast]]==true)
              {
                    if(--hashnum[s[fast]]>=0)
                    {
                        num++;
                    }
              
                    while(num==t.length())
                    {
                        if(fast+1-slow<minlen)
                        {
                            minlen=fast+1-slow;
                            start=slow;
                        }
                        //准备移动slow,判断原先的slow位置是否满足要求
                        if(hashtable[s[slow]]==true&&++hashnum[s[slow]]>0)
                        {
                            //若满足要求
                            num--;
                        }
                        //
                        slow++;
                    }
              }
          }
          return minlen>s.length()? "": s.substr(start,minlen);
    }
};
// @lc code=end
int main(){
Solution s;
string string1="ADOBECODEBAN";
string string2="ABC";
s.minWindow(string1,string2);
return 0;
}
