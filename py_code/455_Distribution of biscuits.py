from typing import List

class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        i=0
        j=0
        while i<len(g) and j<len(s):
            if(s[j]>=g[i]):
                j+=1
                i+=1
            else:
                j+=1
        print(i)
        return i

s=Solution()
s.findContentChildren([1,2,3],[1,1])
