/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length == 1) return 1
  let max = 0, stack=[];
  for(let i=0;i<s.length;i++){
      const currentChar = s.charAt(i);
      if(stack.includes(currentChar)){
          if(max < stack.length) max = stack.length
         const len = stack.length;
          for(let j=0;j<len;j++){
              const character = stack.shift();
              if(character == currentChar){
                break;  
              }
              
          }
      } 
          stack.push(currentChar)
      
   if(max < stack.length) max = stack.length
  }
  
  return max;
};