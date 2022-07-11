// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



//psuedo code :
// declare a function called shuffle
// declare paramaters color1 , color2
//use .slice to remove the first item in the array
// use math.random and .sort to shuffle the array 
//return new array 

describe('shuffle', () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
  it('removes the first item from the array and shuffles the remaining content.', () => {
    expect(shuffle(colors1)).toEqual(shuffle(output))
    epect(shuffle(colors2)).toEqual(shuffle(output2))
  })
})

// ReferenceError: shuffle is not defined


// b) Create the function that makes the test pass.

const shuffle = (array) => {
  return array.slice(1).sort(() => Math.floor(Math.random() - 0.5 ))
}

// PASS  ./code-challenges.test.js








// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


describe ("nums2", () => {
  it("returns an array of the minimum and maximum numbers in that order", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
      expect(tinyBig(nums1)).toEqual([-8, 90])
      expect(tinyBig(nums2)).toEqual([5, 109])
    })
})

// ReferenceError: nums2 is not defined

//psuedo code
// create a function for array 
// set newarray paramater
// use methods math.min and math.max
//return new array with min and max 


// b) Create the function that makes the test pass.

const num2 = (newArray)  => {
return [Math.min(...newArray), Math.max(...newArray)]
}

//passed!!








// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
describe ("diff", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", ()=> {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    expect(diff(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})
// ReferenceError: diff is not defined

//pseudo code
//declare function called diff
//declare paramater that takes in both arrays
// use method concat both arrays
// in a new var use new set method to not have duplicates 
// return new array with fresh nums 




// b) Create the function that makes the test pass.



const diff = (Arr1, Arr2) => {
  let both = Arr1.concat(Arr2) 
  let newArr = [...new Set(both)]
  return newArr
}
//done!!!!!!!!