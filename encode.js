function encode(input) {
    //decimal is an empty array which will return the final result
    let resultDecimal = [];

    //Define length of the input
    let len = input.length;

    //create empty array which will hold ASCII value for each character 
    let asciiArr = [];

    //Define variable to store each bit from raw/decoded value
    let bit = 0; //(very important-> this is a decimal value(decimal 1 or 0))
    //because binary 1 and 0 is same as decimal 1 and 0
    //JS cannot save one individual bit,thats why we save it as a decimal 1 or 0, to represent a single bit.

    //Define a const value of loop iterator(j)
    const LOOP_LEN = 7;
    const INPUT_LEN = 4;

    if (len <= 0 || len > 4) {
        return "Input has to be between 1-4 characters";
    };

    //Following loop will convert string to decimal values(ASCII)
    //i : loop iterator for each bytes(character)
    //j : loop iterator inside each byte(character)
    for (let i = 0; i < INPUT_LEN; i++) {

        if (asciiArr[i] < 0 || asciiArr[i] > 255) {
            return "Input is out of ASCII Table";
        }
        asciiArr[i] = input.charCodeAt(i);
        //Zero-padding logic
        if (isNaN(asciiArr[i]) == true) //ascii[i] == 'NaN'
        {
            asciiArr[i] = 0;
        }
    }

    console.log("before reversing : " + asciiArr);

    //Reverse asciiArr for Encoding purpose.
    asciiArr.reverse();

    console.log("after reversing : " + asciiArr);
    console.log("----------");

    /****Encoding starts here******/

    //Main logic of bit wise operation to store the encoded bits to decimal empty array
    //asciiArr[len - 1 -i] : Each byte from the end of asciiArr
    //j: number of times we are going to right shift
    //i: the location of the byte
    for (let j = 0; j <= LOOP_LEN; j++) {
        for (let i = INPUT_LEN - 1; i >= 0; i--) {
            bit = ((asciiArr[i] >> j) & 1); // i = 0, bit = 0
            resultDecimal.unshift(bit);
        }
    }

    //console.log(resultDecimal);

    //Join the decimal array and return string
    var result = resultDecimal.join(""); //result is a string
    console.log(result);

    //convert to decimal, parseInt will always give decimal result
    // result is the string we want to convert
    // 2 - is the string representaion specifying the numeric base
    result = parseInt(result, 2);
    //console.log(result);
    return result;
}

const text = "";
encode(text);