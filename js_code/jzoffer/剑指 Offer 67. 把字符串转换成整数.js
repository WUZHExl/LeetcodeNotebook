/**
 * @param {string} str
 * @return {number}
 */

//  写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。

 var strToInt = function(str) {
  str=str.trim()
  let temp=str[0],sum=0,flag=0
  if(temp!=='-'&&temp!=='+'&&(temp<'0'||temp>'9')) return 0
  if(temp==='-'){
      str=str.slice(1,str.length)
      flag=1
  }
  if(temp==='+'){
      str=str.slice(1,str.length)
  }
  for(let i=0;i<str.length;i++){
      if(str[i]>='0'&&str[i]<='9'){
          sum=sum*10+(str[i]-'0')
      }else
      {
          break;
      }
  }
  if(flag!==1&&sum>Math.pow(2,31)-1) return Math.pow(2,31)-1
  if(flag===1&&-1*sum<Math.pow(-2,31)) return Math.pow(-2,31)
  if(flag===1) return -1*sum
  else return sum
  
};