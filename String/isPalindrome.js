/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let finalStr="";
  for(let i =0;i<s.length;i++){
      const code = s.charCodeAt(i);
      if((code > 64 && code < 91)||(code > 96 && code < 123) || (code > 47 && code < 58))
          finalStr+=s.charAt(i).toLowerCase()
  }
  const len = finalStr.length;
  for(let i=0;i<len/2;i++){
      if(!(finalStr[i] == finalStr[len-i-1])) return false    
  }
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))