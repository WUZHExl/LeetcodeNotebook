/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
`
第 1 步：先将待反转的区域反转；
第 2 步：把 pre 的 next 指针指向反转以后的链表头节点，
把反转以后的链表的尾节点的 next 指针指向 succ。

要找到第left-1个节点和第right个节点
`
var reverseBetween = function(head, left, right) {

    const reverse=head=>{
      let pre=null
      let curr=head
      while(curr){
        let temp=curr.next
        curr.next=pre
        pre=curr
        curr=temp
      }
      return pre
    }

    const dummyNode = new ListNode(-1)
    dummyNode.next=head

    let pre=dummyNode
    // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
    for(let i=0;i<left-1;i++) pre=pre.next
    // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
    let rightNode=pre
    for(let i=0;i<right-left+1;i++) rightNode=rightNode.next
    // 第 3 步：切断出一个子链表（截取链表）
    let leftNode=pre.next
    let curr=rightNode.next
    // 注意：切断链接
    pre.next = null;
    rightNode.next = null;
    // 第 4 步：反转链表的子区间
    reverse(leftNode);
    // 第 5 步：接回到原来的链表中
    pre.next = rightNode;
    leftNode.next = curr;
    return dummyNode.next;
};