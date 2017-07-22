/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
    let min = nums[0];
    let max = nums[nums.length - 1];
    let i = 0;
    let result = [];

    while(min < max){
        console.log(nums.length);
        let test = nums[min] + nums[max];

        if (test > target) {
            nums.length--;
            max = nums[nums.length - 1];
        }

        else if (test < target) {
            i++;
            min = nums[i];
        }
        // else
        //     return result.push(min);

    }

    return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
