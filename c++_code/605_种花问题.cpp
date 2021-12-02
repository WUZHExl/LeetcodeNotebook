#include <stdio.h>
#include <vector>
using namespace std;
bool hashtable[20000]={false};
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        //防御式编程思想：在 flowerbed 数组两端各增加一个 0， 这样处理的好处在于不用考虑边界条件，任意位置处只要连续出现三个 0 就可以栽上一棵花。
          flowerbed.push_back(0);
          flowerbed.insert(flowerbed.begin(),0);
          int len=flowerbed.size();
          int counts=0;
          //if(flowerbed[0]==0&&flowerbed[1]==0) {flowerbed[0]=1;counts++;}
          for(int i=1;i<len-1;i+=1)
          {
              if(flowerbed[i-1]==0&&flowerbed[i]==0&&flowerbed[i+1]==0)
              {
                  flowerbed[i]=1;
                  counts++;
              }
          }
          //if(flowerbed[len-2]==0&&flowerbed[len-1]==0) {flowerbed[len-1]=1;counts++;}
          if(n<=counts) {printf("true"); return true;}
          else {printf("false");return false;}
    }
};

int main()
{
    Solution s;
    vector<int> a={1};
    s.canPlaceFlowers(a,0);

    return 0;
}
