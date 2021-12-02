/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
     flowerbed.push(0);
     flowerbed.unshift(0);
    //  flowerbed.splice(0,0,0);
    //  flowerbed.splice(flowerbed.length-1,0,0);
     let num=0;
     for (let i=1; i<flowerbed.length-1; i++)
     {
        if (flowerbed[i-1]==0&&flowerbed[i]==0&&flowerbed[i+1]==0)
        {
          num+=1;
          flowerbed[i]=1;
        }
     }
     if(num<n) {console.log(false);return false;}
     else {console.log(true);return true;}
};

canPlaceFlowers([1,0,0,0,1],2)