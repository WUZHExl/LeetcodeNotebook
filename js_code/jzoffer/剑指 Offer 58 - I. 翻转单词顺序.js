
/*
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。
为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

1.无空格字符构成一个单词。
2.输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
3.如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
*/


// 双指针
var reverseWords = function(s) {
  s=s.trim()
  let i=s.length-1,j=s.length-1
  let ans=[]
  while(i>=0){
    while(i>=0&&s[i]!==' ') i=i-1 //跳出循环后，i=单词开头前的空格
    ans.push(s.slice(i+1,j+1))
    while(i>=0&&s[i]===' ') i=i-1 //寻找下一个单词的结尾
    j=i
  }
  return ans.join(' ')
};

// 使用JS内置函数
var reverseWords = function(s) {
    s=s.trim()
    // console.log(s.split(/  */).reverse())
    return s.split(/  */).reverse().join(' ')
};