/**
 * @param {string} s
 * @return {boolean}
 */
// https://leetcode.com/problems/valid-parentheses/
var isValid = function(s) {
  let stack =[];
  const map = {
      "(":")","{":"}","[":"]"
  }
  for(let i =0;i<s.length;i++){
      if(s[i] == ")" || s[i] == "}" || s[i] =="]"){
          if(!(map[stack.pop()] == s[i])) return false;}
      else stack.push(s[i]);
  }
  if(stack.length > 0) return false
  return true
};

console.log(isValid("()"))