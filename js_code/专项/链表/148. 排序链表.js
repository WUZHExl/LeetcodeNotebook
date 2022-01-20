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

// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 

var sortList = function(head) {

   if (!head || head.next === null) return head;
   // 此时slow指向中间节点
   // slow指向的节点就是后半段的头节点   
   let slow=head,fast=head.next
   while(fast!==null&&fast.next!==null){
       slow=slow.next
       fast=fast.next.next
   }
   /*
   如果是fast=head
    偶数个节点，slow指向中点右侧，奇数个节点，slow指向中间节点的下一个节点
   */    
   let postHead=slow.next
       slow.next=null

   // 对前后两个链表进行排序
   let left = sortList(head);
   let right = sortList(postHead)

   // 将排序好的两个有序链表合并为一个链表
   let newList = new ListNode(-1);
   let p = newList;
   while(left&&right){
       if(left.val<=right.val){
           p.next=left
           left=left.next
       }else{
           p.next=right
           right=right.next
       }
       p=p.next
   }
   if(left!==null) p.next=left
   else p.next=right
   return newList.next
};
