`Trie，又称前缀树或字典树，是一棵有根树，其每个节点包含以下字段：
指向子节点的指针数组children。对于本题而言，数组长度为 26，
即小写英文字母的数量。此时children[0] 对应小写字母 a，children[1] 对应小写字母 b，…，children[25] 对应小写字母 z。
布尔字段isEnd，表示该节点是否为字符串的结尾。
`
/**
 * Initialize your data structure here.
 */
 var Trie = function() {
     this.children ={}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
`
我们从字典树的根开始，插入字符串。对于当前字符对应的子节点，有两种情况：
子节点存在。沿着指针移动到子节点，继续处理下一个字符。
子节点不存在。创建一个新的子节点，记录在children 数组的对应位置上，然后沿着指针移动到子节点，继续搜索下一个字符。
重复以上步骤，直到处理字符串的最后一个字符，然后将当前节点标记为字符串的结尾。
`
Trie.prototype.insert = function(word) {
     let node=this.children
     for(let i of word){
       if(!node[i]){
         node[i]={}
       }
       node=node[i]
     }
     node.isEnd=true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.searchPrefix = function(prefix) {
      let node=this.children
      for(let i of prefix){
        if(!node[i]) return false
        node=node[i]
      }
      return node
};

Trie.prototype.search = function(word) {
      const node=this.searchPrefix(word)
      return node!=undefined&&node.isEnd!==undefined
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
     return this.searchPrefix(prefix)
};