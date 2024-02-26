function countCharOccurrences(strings, char) {
  let counts = [];

  for (let i = 0; i < strings.length; i++) {
    // for is loop ng JS
    //syntax ng for loop
    let charCount = 0;
    for (let j = 0; j < strings[i].length; j++) {
      //inner loop na umuulit sa bawat character ng string

      if (strings[i][j] === char) {
        // inner loop na lahat ng characters ng current string i chechecked na kong lahat ba ng char which is charcount is nag increment na by 1.

        charCount++;
        //increment operator in JavaScrip. incrementing by 1
      }
    }

    counts.push(charCount);
    //after counting sa current string ipupush nya to counts array
  }

  return counts;
  // after ng count ibabalik nya yong array count which contain ng counts sa occurance ng character.
}

let strings = ["hello", "world", "1"];
let char = "l";
let result = countCharOccurrences(strings, char);
console.log(result);
