/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(str, wordDict) {
  const memo = {};
  
  const dfs =(str) =>{
      const output = [];
      if(str == "") return [""];
      for(const word of wordDict){
          if(str.indexOf(word) == 0){
              const suffix = str.slice(word.length);
              let suffixWays = dfs(suffix);
              for(const s of suffixWays){
                  output.push(s.length > 0 ? word + " " + s : word )
              }
          }
      }       
      memo[str] = output;
      return output
  }
  
  return dfs(str)
}


console.log(wordBreak("catsanddog",["cat","cats","and","sand","dog"]))
