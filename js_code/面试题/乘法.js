

//求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题


function multiply(a, b) {
  //求两个数中精度大的一个
   var stra=a.toString();
   var strb=b.toString();
   var len=Math.max(stra.length-stra.indexOf('.')-1,strb.length-strb.indexOf('.')-1);
   //
   return parseFloat(a*b).toFixed(len);
}