function returnDivisibleBy3(numbers) {
  // mag cacalculte sya ng result ng number na  divisible by 3
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    // syntax ng for loop
    let calculatedResult = numbers[i] ** 2 + 2;

    //ito nmn formula if yong mga numbers is divisible by 3

    if (calculatedResult % 3 === 0) {
      // mag checheck if yong remainders nya is equal to 0
      //if yong remainders is exact equal to 0 its means divisible by 3 na walang kahit anong remainders is
      result.push(calculatedResult);
      //
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5];
const answer = returnDivisibleBy3(numbers);
console.log(answer);
