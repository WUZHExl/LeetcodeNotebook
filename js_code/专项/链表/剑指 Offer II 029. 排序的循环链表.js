/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */

/*
试图在链表中找到相邻的两个节点，如果这两个节点的前一个节点的值比待插入的值小并且后一个节点的值比待插入的值大，那么就将新节点插入这两个节点之间
如果找不到符合条件的两个节点，也就是待插入的值大于链表中已有的最大值或小于已有的最小值，那么新的节点将被插入值最大的节点和值最小的节点之间
*/

// 循环链表
 var insert = function(head, insertVal) {
    let node=new Node(insertVal);

    // 空链表时
    if(head===null){
      head=node
      head.next=head
    }
    else{
      let cur=head;
      let next=head.next;
      let biggest=head;
      // 试图找到相邻的两个节点cur和next,
      // 使得cur的值小于或等于待插入的值且next的值大于或等于待插入的值

      // 若不满足条件，则继续迭代
      while(!(cur.val<=node.val&&next.val>=node.val)&&next!=head){
        cur=next;
        next=next.next;
        if(cur.val>=biggest.val) biggest=cur
      }

      if(cur.val<=node.val&&next.val>=node.val)
      {//若找到，则插入
        cur.next=node
        node.next=next
      }else{
        // 如果没有找到符合条件的两个节点，将新的节点插入值最大的节点biggest后面
        node.next=biggest.next
        biggest.next=node;
      }
    }
    return head

};