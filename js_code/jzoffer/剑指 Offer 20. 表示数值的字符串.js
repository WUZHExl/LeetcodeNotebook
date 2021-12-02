/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
  if(s===" ") return false
  if(isNaN(Number(s))!==true) return true
  else return false
};