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
`
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
`
 var removeNthFromEnd = function(head, n) {

  //先用一个快指针走n步，
  //然后，快慢指针一起走，当快指针指向链表末尾时，慢指针就指向倒数第n个节点
  //要删除倒数第n个节点，先得找到前一个节点
  let pre=new ListNode(-1,head)
  let slow=pre,fast=pre
  while(n--){
      fast=fast.next
  }
  while(fast.next!==null){
      //这个时候fast指向倒数第一个节点，slow指向倒数第n+1个节点
      fast=fast.next
      slow=slow.next
  }
  slow.next=slow.next.next
  return pre.next

};



//没有设置哑节点
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
      //这个时候fast指向最后的null，slow指向倒数第n个节点
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