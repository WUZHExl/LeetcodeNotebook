/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
  if(!head) return null;
  let p=head
  let mp=new Map()
  while(p!==null){
      mp.set(p,new Node(p.val))
      p=p.next
  }
  p=head
  while(p!==null){
      if(p.next!==null) mp.get(p).next=mp.get(p.next)
      if(p.random!==null) mp.get(p).random=mp.get(p.random)
      p=p.next
  }
  return mp.get(head)

};