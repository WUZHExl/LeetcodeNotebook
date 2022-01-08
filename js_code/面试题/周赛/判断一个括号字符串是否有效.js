/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */

`
不等式： i+1-r<r： 从左到右访问到第i个字符，是不可更改的右括号，
这样的右括号出现次数为r，那它的左边[0...i]最多有i+1-r个左括号，
左括号数量小于右括号的话，return false 
n-i-l<l： 从右到左访问到第i个字符，
是不可更改的左括号，这样的左括号出现次数为l，
那它的右边[i...n-1]最多有n-i-l个右括号，
右括号数量小于左括号的话，return false
`
 var canBeValid = function(s, locked) {
  let n=s.length,l=0,r=0;
  if(n%2==1) return false;
  for(let i=0;i<n;i++){
      if(locked[i]=='1'&&s[i]==')'){
          r++;
          if(i+1-r<r) return false;
      }
  }
  for(let i=n-1;i>=0;i--){
      if(locked[i]=='1'&&s[i]=='('){
          l++;
          if(n-i-l<l) return false;
      }
  }
  return true;

};