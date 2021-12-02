/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

//  展平的规则是一个节点的子链表展平之后将插入该节点和它的下一个节点之间
/*
当我们遍历到某个节点node 时，如果它的 child 成员不为空，那么我们需要将child 指向的链表结构进行扁平化，并且插入 node 与 node 的下一个节点之间。

因此，我们在遇到child 成员不为空的节点时，就要先去处理child 指向的链表结构，这就是一个「深度优先搜索」的过程。
当我们完成了对 child 指向的链表结构的扁平化之后，就可以「回溯」到node 节点。

为了能够将扁平化的链表插入node 与 node 的下一个节点之间，我们需要知道扁平化的链表的最后一个节点last，随后进行如下的三步操作：

1.将node 与 node 的下一个节点next 断开：

2.将node与child 相连；

3.将last与next 相连。

*/

// DFS

 var flatten = function(head) {
    
  // 展平以head为头节点的链表之后返回链表的尾节点
  const flatten=head=>{
      let node=head;
      // 记录最后一个节点
      let last=null;
      while(node){
          let next=node.next
          // 如果有子节点，先处理子节点
          if(node.child){
              // 递归调用flattenGetTail函数展平子链表
              let childlast=flatten(node.child)
              // 子链表展平之后的头节点是child，尾节点是childTail
              next=node.next

              //  将node与child相连
              node.next=node.child
              node.child.prev=node

              // 若next不为空，将last和next相连
              if(next!==null){
                childlast.next=next
                next.prev=childlast
              }

              // 处理完后将child置为空
              node.child=null
              last=childlast

          }else{
            // 若没有子节点
            last=node;
          }
          node=next
      }
      return last
  }

  flatten(head)
  return head

};