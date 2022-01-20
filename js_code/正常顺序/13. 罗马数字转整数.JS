/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  let nums=[1000,900,500,400,100,90,50,40,10,9,5,4,1],
      chars=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result=0;
  while(s.length>0){
      if(s.startsWith(chars[0])){
          result+=nums[0];
          s=s.slice(chars[0].length)
      }else{
          nums.shift();
          chars.shift();
      }
  }
  return result;
};


var  romanToInt = function(s) {
  const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  const result = 0;
  for (const [value, symbol] of valueSymbols) {
      while (s.startsWith(symbol)) {
        result+=value;
        s=s.slice(symbol.length)
      }
      if (s.length == 0) {
          break;
      }
  }
  return result;
};
