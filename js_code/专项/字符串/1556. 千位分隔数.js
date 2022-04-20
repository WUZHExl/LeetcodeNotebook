/**
 * @param {number} n
 * @return {string}
 */
 var thousandSeparator = function(n) {

  let res=(n+"").split('')
  let count=0

  for(let i=res.length-1;i>=0;i--)
  {
      count++
      if(count%3===0&&i>0){
          res.splice(i,0,'.')//在数组第i个位置后插入'.'
          
      }
  }
  // console.log(res)
  return res.join('')
  

};