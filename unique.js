function firstUniqChar(s) {
    const charCount = {}; // HashMap to store character frequency
  
    // Count the frequency of each character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount[char] = charCount[char] + 1 || 1;
    }
  
    // Find the index of the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount[char] === 1) {
        return i;
      }
    }
  
    return -1; // No non-repeating character found
  }
  
  // Example usage
  const str = "leetcode";
  const result = firstUniqChar(str);
  console.log(result); // Output: 0 (index of the first non-repeating character 'l')
  