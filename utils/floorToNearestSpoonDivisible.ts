/*
- If the input number is already divisible by 0.04 (i.e., the remainder of dividing the number by 0.04 is 0):
  - Return the input number as it is, as no changes are needed.

- Otherwise:
  - Calculate the floor value by dividing the input number by 0.04 and rounding down to the nearest whole number using the `Math.floor` function.
  - Multiply the floor value by 0.04 to obtain the nearest value that is divisible by 0.04.
  - Convert the result to a floating-point number using `parseFloat`.
  - Limit the result to two decimal places using the `toFixed` method with an argument of 2.
  - Return the limited result.

The purpose of the code is to ensure that the input number is rounded down to the nearest value that is divisible by 0.04 and to restrict the result to two decimal places if any rounding occurs.

*/

const floorToNearestSpoonDivisible = (number: number): number => {
    if (number % 0.04 === 0) {
       return number; // Number is already divisible by 0.04, no changes needed
    } else {
       const floorValue = Math.floor(number / 0.04) * 0.04; // Flooring to nearest value divisible by 0.04
       return parseFloat(floorValue.toFixed(2)); // Limiting the result to 2 decimal places
    }
 };

 export default floorToNearestSpoonDivisible