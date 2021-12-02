from typing import List

class Solution:
    def sortSentence(self, s: str) -> str:
      str1=s.split(" ")
      ans=""
      dict={}
      for i in range(len(str1)):
          dict[str1[i][len(str1[i])-1]]=str1[i][0:len(str1[i])-1]
      for i in sorted(dict) : 
         if eval(i)<len(dict):ans+=dict[i]+' '
         elif eval(i)==len(dict):ans+=dict[i]
      print(ans)
      return ans
      pass



s=Solution()
s.sortSentence("Myself2 Me1 I4 and3")
