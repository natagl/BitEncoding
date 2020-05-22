function encode(input){
  //decimal is an empty array which will return the final result

  let decimal = [];
  //Define length of the input
  let len = input.length;
  //create empty array which will hold decimal value for each character 
  let decimalArr = [];
  //Define variable to store each bit from raw/decoded value
  let bit = 0;
  //Define a const value of loop iterator(j)
  const LOOP_VAL = 7;
  const FIXED_LEN = 4;
  
  
  // if(len<4){
  //   input.push(1);
  //   input.push(1);
  //   input.push(1);
  // }
  //Following loop will convert string to decimal values(ASCII)
  //i : loop iterator for each bytes(character)
  //j : loop iterator inside each byte(character)
  for(let i = 0; i < len ; i++){
    decimalArr[i] = input.charCodeAt(i);
  }

  //Zero padding
  // FIXED_LEN- len = number of zeros we have to pad
  // if input is "A" , then 4 - 1 = 3 number of zeros we have to pad
  // if input is "AB" , then 4 - 2 = 2 number of zeros we have to pad
  // if input is "ABc" , then 4 - 3 = 1 number of zeros we have to pad
  // if input is "ABcD" , then 4 - 4 = 0 number of zeros we have to pad
  if(len < FIXED_LEN){
      decimalArr.push(0);
      decimalArr.push(0);
      decimalArr.push(0);
  }

  //Reverse decimalArr for Encoding purpose.
  decimalArr.reverse();

  console.log(decimalArr);
  console.log("----------");

  //Encoding starts here
  //Main logic of bit wise operation to store the encoded bits to decimal empty array
  //decimalArr[len - 1 -i] : Each byte from the end of decimalArr
  //j: number of times we are going to right shift
  //i: the location of the byte
  for(let j = 0 ; j <= LOOP_VAL ; j++){
    for(let i = 0 ; i < FIXED_LEN ;i++){
      bit = ((decimalArr[FIXED_LEN - 1 -i] >> j) & 1); // i = 0, bit = 0
      decimal.unshift(bit);
     }
  }

  //console.log(decimal);
  var result = decimal.join("").toString(2);
  console.log(result);
  result = parseInt(result,2);
  console.log(result);
  return decimal;
}

const text = "A";
encode(text);
