

//动态规划，超时
var countDigitOne = function(n) {
  const sum=(x)=>{
      let sum=0,num=0
      while(x){
          a=x%10
          x=Math.floor(x/10)
          if(a===1) sum+=1
      }
      return sum;
  }
  let pre=0
  for(let i=1;i<=n;i++){
      pre=pre+sum(i)
  }
  return pre

};




var countDigitOne = function(n) {
  //index表示10^k,从10^0开始枚举
  let sum=0,index=1
  for(let k=0;n>=index;k++){
    sum+=Math.floor(n/(index*10))*index+
    Math.min(Math.min(n%(index*10)-index+1,0),index)

    index*=10
  }
  return sum
};


