/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
     g=g.sort((a,b) =>a-b);
     s=s.sort((a,b) =>a-b);
     let i=0,j=0,num=0;
     while(i<g.length&&j<s.length)
     {
       if(s[j]>=g[i])
       {
         i++;
         j++;
       }
       else
       {
         j++;
       }
     }
     console.log(i);
     return i;
};

findContentChildren([1,2,3],[1,1]);