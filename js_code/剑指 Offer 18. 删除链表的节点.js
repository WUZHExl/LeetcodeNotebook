/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {


  let p=head
  let pre=new ListNode(-1)
  pre.next=p
  while(p!==null){
      if(p.val===val){
          pre.next=p.next
          if(p===head) return head.next
          return head
      }else{
          pre=pre.next
          p=p.next
      }
  }
};