from typing import List
'''
字符串 S 由小写字母组成。
我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
返回一个表示每个字符串片段的长度的列表。 
'''
'''
用列表记录对应字符出现的位置，保留最后出现的位置
'''
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        hash=[0]*26
        for i in range(len(s)):
            hash[ord(s[i])-ord('a')]=i

        #print(hash)
        
        res,r,l=[],0,0
        for i in range(len(s)):
            r=max(r,hash[ord(s[i])-ord('a')])
            if r==i:
                res.append(r-l+1)
                l=i+1
        return res