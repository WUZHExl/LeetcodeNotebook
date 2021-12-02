// 寻找中间节点，反转后半段链表，依次相链

/*
把链接分成两半：寻找中间节点，使用快慢指针，快指针一次走两步，慢指针一次走一步，当快指针走到链表尾节点时慢指针刚好走到链表的中间节点（当链表的节点总数是奇数时，要确保链表的前半段比后半段多一个节点）
反转链表的后半段
将两个链表依次相链
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

//  寻找中间节点，反转后半段链表，依次相链
// 寻找中间节点：快慢指针
// 反转链表，基础
// var reorderList = function(head) {
//   let dummy=new ListNode(0)//
//   dummy.next=head
//   let slow=head,fast=head
//   while(fast&&fast.next){
//       fast=fast.next.next
//       slow=slow.next
//   }
//   // 此时slow指向中间节点
//   // slow指向的节点就是后半段的头节点
//   let nextHead=slow.next
//   slow.next=null

//   // 反转链表
//   const reverseList=head=>{
//       if(!head||!head.next) return head
//       const nextHead=reverseList(head.next)
//       head.next.next=head
//       head.next=null
//       return nextHead
//   }

//   // 合并两个链表
//   const merge=(node1,node2,head)=>{
//       let pre=head
//       while(node1&&node2){
//           let temp=node1.next
//           pre.next=node1
//           node1.next=node2
//           // 迭代
//           pre=node2
//           node1=temp
//           node2=node2.next
//       }
//       if(node1) pre.next=node1
//   }

//   merge(head,reverseList(nextHead),dummy)

// };



// 整合一下
var reorderList = function(head) {

    const middle=head=>{
      let slow=head,fast=head
      while(fast&&fast.next){
        fast=fast.next.next
        slow=slow.next
      }
      return slow
    }

    const reverse=head=>{
      if(!head||!head.next) return head
      const nextHead=reverse(head.next)
      head.next.next=head
      head.next=null
      return nextHead
    }

    const merge=(node1,node2)=>{
      let temp1,temp2
      while(node1&&node2){
        temp1=node1.next
        temp2=node2.next

        node1.next=node2
        node1=temp1

        node2.next=node1
        node2=temp2
      }
    }

    let middlehead=middle(head)
    let l1=head
    let l2=middlehead.next
    middlehead.next=null
    merge(l1,reverse(l2))

};