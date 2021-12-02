#include <string>
#include <map>
#include <stdio.h>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        map<string,int> mp;
        int nums=0;
        
        for(int i=0;i<s.length();i++)
        {
            mp[s[i]]++;
        }

    }
};