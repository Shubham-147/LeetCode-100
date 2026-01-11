/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map ={};
  for(let i=0;i<nums.length;i++){
      if(map[nums[i]]) map[nums[i]]++;
      else map[nums[i]] = 1
  }
  const finalList = Object.entries(map).sort((a,b) => b[1] -a[1] );
  const output=[];
  for(let i=0;i<k;i++) output.push(Number(finalList[i][0]))
  return output
};


console.log(topKFrequent([1,2,1,2,1,2,3,1,3,2],2))