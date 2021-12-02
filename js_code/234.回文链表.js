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

