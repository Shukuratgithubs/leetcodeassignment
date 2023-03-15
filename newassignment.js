//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

const twoSum = function(nums, target) {
    let memory ={}
    for (let i=0; i<nums.length; i++){
        if(memory[nums[i]]===undefined){
        memory[target-nums[i]]=i;
}else{
    return [memory[nums[i]] , i]
    }
        }
    }




// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
     let countIslands = 0;
    
    for (let rowIndex in grid){
        for (let colIndex in grid[rowIndex]){
            if (grid [rowIndex][colIndex]==='1'){
                
                countIslands++;
            }
        }
    }
    
    return countIslands;

} ;
