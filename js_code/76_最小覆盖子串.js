/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

//查找的子串不是连续的，只需要包含即可！！！！！！

 var minWindow = function(s, t) {
    let slow=0,fast=0,num=0;
    let start=0,end=0,minsize=s.length+1;
    let hashtable =new Array(128).fill(false);
    let hashnum =new Array(128).fill(0);
    for(let i=0;i<t.length;i++)
    {
        hashtable[t[i].charCodeAt()] =true;
        hashnum[t[i].charCodeAt()]+=1;
        console.log(hashtable[t[i].charCodeAt()],hashnum[t[i].charCodeAt()]);
        
    }
    for(fast=0;fast<s.length;fast++)
    {
        if(hashtable[s[fast].charCodeAt()]==true)
        {
            if(--hashnum[s[fast].charCodeAt()]>=0)
            {
                num++;
            }
            while(num==t.length)
            {
                if(fast-slow+1<minsize)
                {
                    minsize=fast-slow+1;
                    start=slow;
                    end=fast+1;
                }
                if(hashtable[s[slow].charCodeAt()]==true&&++hashnum[s[slow].charCodeAt()]>0)
                {
                   num--;
                }
                slow++;
                // console.log("slow:",slow)
            }
        }
    }
    // console.log("aaa:",minl,minsize)
    // if(minsize>s.length)
    // {
    //     console.log("aaa");
    // }
    // else
    // {
    //     console.log(s.slice(minl,fast+1));
    // }
    return minsize>s.length?"":s.slice(start,end);

    // console.log(ans);
    // return ans;

};

minWindow("ADOBECODEBANC","ABC");