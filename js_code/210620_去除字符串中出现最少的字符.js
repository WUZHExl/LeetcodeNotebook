//字节一面
// 去除字符串中出现次数最少的字符，不改变原字符串的顺序。
// 例：“ababac” —— “ababa”
// “aaabbbcceeff” —— “aaabbb”
const strsplice=function(str)
{
     const map=new Map();
     for(i of str.split(''))
     {
       if(map.has(i)==false){
       map.set(i,1)
       }
       else{
         num=map.get(i);
         map.set(i,num+1);
       }

     }
     let minsize=str.length;
     let ans=[];
     for(i of map)
     {
        if(i[1]<minsize)
        {
          minsize=i[1];
        }
     }
     for(i of map)
     {
       if(i[1]===minsize)
       {
         ans.push(i[0]);
       }
     }
     for(i=0;i<str.length;i++)
     {
      if(ans.indexOf(str[i])!=-1)
      {
        str=str.slice(0,i)+str.slice(i+1);
        //重点
        i--;
      }
     }
    //  console.log(map);
    //  console.log(ans);
     console.log(str);
}
strsplice("aaabbbcceeff")
strsplice("ababac")
strsplice("aaaaccccddffggooooommm")