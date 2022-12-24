function hasTargetSum(array, target) {
  // Write your algorithm here
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (i === j) {}
      else if (target === array[i] + array[j]) {return true}
    }
    if (i === j) {}
    else if (target === array[i] + array[j]) {return true}
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  
*/

/*
  Add written explanation of your solution here
  Filter & Sort the array
  Add the first and last item, if greater than target, discard.
  brute force it
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 10, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
