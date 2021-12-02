/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
     let fast=head,slow=head;
     if(fast==null || fast.next==null) return null;
     fast=fast.next.next;
     slow=slow.next;
     while(slow!=fast)
     {
       if(fast==null || fast.next==null) return null;
       fast=fast.next.next;
       slow=slow.next;
     }
     fast=head;
     while(slow!=fast)
     {
       fast=fast.next;
       slow=slow.next;
     }
     return fast;
};

// 好吧，js也有do....while语句可以使用