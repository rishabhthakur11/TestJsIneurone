function moveZeros(nums) {
  let i = 0; // Pointer to track non-zero elements

  // Iterate over the array and move non-zero elements to the left
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
  }

  // Fill the remaining elements with zeros
  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }

  return nums;
}

// Example usage
const nums = [0, 1, 0, 3, 12];
const result = moveZeros(nums);
console.log(result); // Output: [1, 3, 12, 0, 0]
