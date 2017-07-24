function printArray(input) {
  let output = "";
  for (let index = 0; index < input.length; index++) {
    if (index !== input.length - 1) {
      output += input[index] + ",";
    } else {

      output += input[index];

    }
  }
  return output;
}