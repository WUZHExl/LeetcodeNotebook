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

//  给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
// 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。


// 迭代
 var swapPairs = function(head) {
  let dummyNode=new ListNode(-1,head)  //虚拟头结点
  let curr=dummyNode
  while(curr.next!==null&&curr.next.next!==null){
      let temp=curr.next.next,pre=curr.next   //保存下一次迭代需要的节点
      pre.next=temp.next                      //进行迭代
      temp.next=pre
      curr.next=temp
      curr=pre
  }
  return dummyNode.next
};


 //递归
var swapPairs = function(head) {
    if(head===null||head.next===null) return head;
    //交换
    let p=head.next
    head.next=swapPairs(p.next)
    p.next=head
    return p
};
