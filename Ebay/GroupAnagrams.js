/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const obj={};
  for(let i=0;i<strs.length;i++){
      const current = strs[i].split("").sort().join("");
      if(obj[current]) obj[current] = [...obj[current], strs[i]]
      else obj[current] = [strs[i]]
  }
  return Object.values(obj)
};

// input: ["eat","tea","tan","ate","nat","bat"]
// output: [["eat","tea","ate"],["tan","nat"],["bat"]]