class LinkNode {
  constructor(val, next) {
      this.val = val;
      this.next = next;
  }
}

`
设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。

在链表类中实现这些功能：

get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
`
//单链表 储存头尾节点 和 节点数量
var MyLinkedList = function(val,next) {
  this.size = 0;
  this.tail = null;
  this.head = null;
};

/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.getNode=function(index){
  if(index<0||index>=this.size) return null
  let curr=new LinkNode(0,this.head)
  while(index>=0){
      curr=curr.next
      index--
  }
  return curr
}

MyLinkedList.prototype.get = function(index) {
  if(index<0||index>=this.size) return -1
  return this.getNode(index).val
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new LinkNode(val, this.head);  //将原来的头结点作为新节点的后续节点
  this.head = node;   //将新节点作为新的头结点
  this.size++;
  if(!this.tail) {    //若原来没有尾结点，则设置尾结点
      this.tail = node;
  }
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new LinkNode(val, null);
  this.size++;
  if(this.tail) {  //若已有尾结点
      this.tail.next = node;
      this.tail = node;
      return;
  }
  this.tail = node; //若原来没有尾结点
  this.head = node;
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this.size) return;
  if(index <= 0) {
      this.addAtHead(val);
      return;
  }
  if(index === this.size) {
      this.addAtTail(val);
      return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);
  node.next = new LinkNode(val, node.next);
  this.size++;
};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0 || index >= this.size) return;
  if(index === 0) {
      this.head = this.head.next;
      // 如果删除的这个节点同时是尾节点，要处理尾节点
      if(index === this.size - 1){
          this.tail = this.head
      }
      this.size--;
      return;
  }
  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);
  node.next=node.next.next
  // 处理尾节点
  if(index === this.size - 1) { //如果要删除的是最后一个节点
      this.tail = node;
  }
  this.size--;
};

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/