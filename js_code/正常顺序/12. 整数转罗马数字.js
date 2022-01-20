/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {

  let nums=[1000,900,500,400,100,90,50,40,10,9,5,4,1],
      chars=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result='';
  while(num){
      if(num>=nums[0]){
          result+=chars[0];
          num-=nums[0];
      }else{
          nums.shift();
          chars.shift();
      }
  }
  return result;

};


var intToRoman = function(num) {
  const valueSymbols = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  const roman = [];
  for (const [value, symbol] of valueSymbols) {
      while (num >= value) {
          num -= value;
          roman.push(symbol);
      }
      if (num == 0) {
          break;
      }
  }
  return roman.join('');
};
