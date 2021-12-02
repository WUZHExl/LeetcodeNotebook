/*
描述
用两个栈来实现一个队列，分别完成在队列尾部插入整数(push)和在队列头部删除整数(pop)的功能。 
队列中的元素为int类型。保证操作合法，即保证pop操作时队列内已有元素。
*/




//栈A用来作入队列

//栈B用来出队列，当栈B为空时，栈A全部出栈到栈B,栈B再出栈（即出队列）
var inStack=[],outStack=[]

function push(node)
{
    // write code here
    inStack.push(node)
}
function pop()
{
    // write code here
    if(!outStack.length){
        while(inStack.length){
            outStack.push(inStack.pop())
        }
    }
    return outStack.pop()
}
module.exports = {
    push : push,
    pop : pop
};