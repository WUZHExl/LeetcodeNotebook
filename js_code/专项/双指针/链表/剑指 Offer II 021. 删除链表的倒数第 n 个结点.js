/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//  给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 本题与主站 19 题相同： https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/


 var removeNthFromEnd = function(head, n) {
  let slow=head,fast=head
  let pre=new ListNode(-1)//设置哑节点指向slow
  pre.next=slow
  // 先用快慢节点找到倒数第n个节点
  while(n){
      fast=fast.next
      n--
  }
  while(fast!==null){
      fast=fast.next
      slow=slow.next
      pre=pre.next
  }
  // 此时slow指向倒数第n个节点,删除slow
  pre.next=slow.next
  //若需要删除的是头结点
  if(slow===head) return head.next

  return head
};