from typing import List

class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
      flowerbed.insert(0,0)
      flowerbed.insert(len(flowerbed),0)
      num=0
      for i in range(1,len(flowerbed)-1):
        if flowerbed[i-1]==0 and flowerbed[i]==0 and flowerbed[i+1]==0:
          num+=1
          flowerbed[i]=1
      if num<n:
        print(False) 
        return False
      else: 
        print(True)
        return True
      print(flowerbed)
      pass


s=Solution()
s.canPlaceFlowers([1,0,0,0,1],2)