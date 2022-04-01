//给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

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
//双指针
 var reverseList = function(head) {

    let pre=null;
    let cur=head
    while (cur){
      let temp=cur.next
      cur.next=pre
      pre=cur
      cur=temp
    }
    return pre
};


//递归
var reverseList = function(head) {

  if(!head||!head.next) return head
  let newHead=reverseList(head.next)
  head.next.next=head
  head.next=null
  return newHead

};