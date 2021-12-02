/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//  给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。

// 递归解法
 var reverseList = function(head) {
    
  if(!head||!head.next) return head  //递归终止条件
  const nextHead=reverseList(head.next)//拆解子问题
  head.next.next=head//求解子问题
  head.next=null
  return nextHead
  

};

// 迭代
// 
// 用三个变量：pre表示遍历过的上一个节点，cur表示遍历中当中正指向的节点，next下一个要遍历到的节点
// 要实现反转就是当前cur指针的next节点指向前一个pre指针

var reverseList = function(head) {
    
  let pre=null,cur=head
  while (cur) {
    let temp=cur.next  //保存当前节点此时的next
    cur.next=pre //把当前节点的next改为前一个节点

    // 迭代
    pre=cur
    cur=temp
    }  

    //pre最后存储的就是最后头结点
    return pre 
};