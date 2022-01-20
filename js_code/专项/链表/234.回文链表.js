/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

`
利用后序遍历和递归实现
递归+后序遍历 事实上就相当于一个栈，把链表节点值都入栈了，
在最开始的时候就用一个变量把头节点存起来，
当后序遍历到最后一个节点的时候，就依次比较left节点和right节点即可
`
var isPalindrome = function(head) {
  let preNode = head;
  function traverse(currentNode) {
    if(currentNode===null) return true
    if(!traverse(currentNode.next)) return false
    if(currentNode.val!==preNode.val) return false
    preNode=preNode.next
  }
  return traverse(head);
};


`
找到前半部分链表的尾节点。
反转后半部分链表。
判断是否回文。
返回结果。

`
var isPalindrome = function(head) {
    if(!head||!head.next) return true;//空节点或只有一个节点也算回文

    let slow=head,fast=head//快慢指针找到链表中点
    //当fast指向末尾时，slow指向中点
    while(fast.next&&fast.next.next){
      slow=slow.next
      fast=fast.next.next
    }
    //翻转后半部分链表和前半部分比较
    //箭头函数
    reverseList=head=>{
      let pre=null
      let curr=head//当前节点
      while(curr){
        const nexttemp=curr.next;//保存位置
        curr.next=pre;  //翻转
        pre=curr;     //到下一个节点
        curr=nexttemp;
      }
      return pre
    }

    slow.next=reverseList(slow.next)
    slow=slow.next
    while(slow){
      if(head.val!==slow.val) return false
      head=head.next
      slow=slow.next
    }
    return true

};
// @lc code=end

//方法一：将值复制到数组中后用双指针法
`
一共为两个步骤：
复制链表值到数组列表中。
使用双指针法判断是否为回文。

`
var isPalindrome = function(head) {
  const vals = [];
  while (head !== null) {
      vals.push(head.val);
      head = head.next;
  }
  for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
      if (vals[i] !== vals[j]) {
          return false;
      }
  }
  return true;
};
