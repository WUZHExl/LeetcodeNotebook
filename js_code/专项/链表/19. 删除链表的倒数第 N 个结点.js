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

//  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
//  双指针
// 先用快慢指针，快指针先走n步,然后一起走，当快指针当末尾时，慢指针正好指向倒数第n个节点
// 但是只需要找到倒数第n-1个节点，所以设定的条件是fast.next!==null
 var removeNthFromEnd = function(head, n) {
  let pre=new ListNode(-1,head)
  let fast=pre,slow=pre
  while(n--) fast=fast.next
  while(fast.next!==null){
      fast=fast.next
      slow=slow.next
  }
  slow.next=slow.next.next
  return pre.next
};