`
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

进阶：

你可以设计一个只使用常数额外空间的算法来解决此问题吗？
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
`

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {

    if(!head) return head

    // 反转区间 [a, b) 的元素，注意是左闭右开
    const reverse=(a,b)=>{

      let pre=null;
      let curr=a;
      while(curr!==b){
        let temp=curr.next
        curr.next=pre;  //
        pre=curr;     //
        curr=temp;
      }
      return pre
    }

    let a=head,b=head
    for(let i=0;i<k;i++){
    // 不足 k 个，不需要反转，base case
      if (b == null) {
        return head;
      } else {
        b = b.next;
      }
    }

    // 反转前 k 个元素
    let newHead=reverse(a,b);
    a.next=reverseKGroup(b,k)
    return newHead


};