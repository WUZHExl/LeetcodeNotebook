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

`
我们需要把链表节点按照 k 个一组分组，所以可以使用一个指针 head 依次指向每组的头节点。
这个指针每次向前移动 k 步，直至链表结尾。对于每个分组，我们先判断它的长度是否大于等于 k。若是，我们就翻转这部分链表，否则不需要翻转
对于一个子链表，除了翻转其本身之外，还需要将子链表的头部与上一个子链表连接，以及子链表的尾部与下一个子链表连接

`
//迭代
const myReverse = (head, tail) => {
  let prev = tail.next;
  let p = head;
  while (prev !== tail) {
      const nex = p.next;
      p.next = prev;
      prev = p;
      p = nex;
  }
  return [tail, head];
}
var reverseKGroup = function(head, k) {
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;

  while (head) {
      let tail = pre;
      // 查看剩余部分长度是否大于等于 k
      for (let i = 0; i < k; ++i) {
          tail = tail.next;
          if (!tail) {
              return hair.next;
          }
      }
      const nex = tail.next;
      [head, tail] = myReverse(head, tail);
      // 把子链表重新接回原链表
      pre.next = head;
      tail.next = nex;
      pre = tail;
      head = tail.next;
  }
  return hair.next;
};


//递归
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
    //翻转后b是这一段的头节点，a是这一段的尾结点
    a.next=reverseKGroup(b,k)
    return newHead


};