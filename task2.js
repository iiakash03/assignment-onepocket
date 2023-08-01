function sumArrayIntegers(numbersArray) {
    if (!Array.isArray(numbersArray)) {
      throw new Error('Input must be an array of integers.');
    }
  
    let sum = 0;
    for (const num of numbersArray) {
      if (Number.isInteger(num)) {
        sum += num;
      } else {
        throw new Error('Input array must contain only integers.');
      }
    }
  
    return sum;
    
  }
  