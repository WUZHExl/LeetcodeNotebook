/*
 * @lc app=leetcode.cn id=347 lang=cpp
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
#include <stdio.h>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;
bool cmp(pair<int,int> a, pair<int,int> b) {
	return a.second > b.second;
}
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
       map<int, int> mp;
       for (int i = 0; i < nums.size();i++)
       {
           mp[nums[i]] +=1;
       }
       vector< pair<int,int> > vec;
       for(map<int,int>::iterator it = mp.begin(); it != mp.end(); it++){
           vec.push_back( pair<int,int>(it->first,it->second) );
       }
       sort(vec.begin(),vec.end(),cmp);
       vector<int> ans;
       for(int i=0;i<k;i++)
       {
           ans.push_back(vec[i].first);
       }
       return ans;
    }
};
// @lc code=end

