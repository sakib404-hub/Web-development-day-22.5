function addition(numbnerOne, numberTwo) {
  console.log(numbnerOne, numberTwo);
  console.log(arguments);
  //Arguments is a array like object
  console.log(arguments[3]);
}

addition(12, 13, 45, 89, 78);
