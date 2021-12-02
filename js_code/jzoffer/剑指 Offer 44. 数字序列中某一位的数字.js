/**
 * @param {number} n
 * @return {number}
 */
 var findNthDigit = function(n) {
    let [digit,start,count]=[1,1,9]
    while(n>count){
      n=n-count
      start*=10
      digit+=1
      count=9*start*digit
    }
    num=start+Math.floor((n-1)/digit)
    s=num.toString()
    res=Number(s[(n-1)%digit])
    return res
};