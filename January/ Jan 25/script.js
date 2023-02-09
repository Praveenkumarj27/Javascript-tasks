// convert number to simple words.  (ex: 123 -> one two three)

function converToWords(num) {
  var value = num.toString().split(""); //=>['5','5']
  words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var temp = "";

  for (let i = 0; i < value.length; i++) {
    temp += " " + words[value[i]];
  }
  console.log(temp);
}

converToWords(55);

//-------------------------------------------------------------------------------------------------------------------------------------------------------

function doConvert(numberInput) {
  let oneToTwenty = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  let tenth = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let outputText;
  if (numberInput == 0) {
    return (outputText = 'zero');
  } else {
   var num = ('0000000' + numberInput)
      .slice(-7)
      .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
      console.log(num);
  }
 
  if (!num) return;

   outputText =
    num[1] != 0
      ? (oneToTwenty[Number(num[1])] ||
          `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + " million "
      : "";

  outputText +=
    num[2] != 0
      ? (oneToTwenty[Number(num[2])] ||
          `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + "hundred "
      : "";
  outputText +=
    num[3] != 0
      ? (oneToTwenty[Number(num[3])] ||
          `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + " thousand "
      : "";
  outputText +=
    num[4] != 0
      ? (oneToTwenty[Number(num[4])] ||
          `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + "hundred "
      : "";
  outputText +=
    num[5] != 0
      ? oneToTwenty[Number(num[5])] ||
        `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `
      : "";

  return outputText;
}

console.log(doConvert(0)); 


//-----------------------------------------------------------------------------------------------------------

function add(num) {
  var temp = 0;
  var check = num.toString().split("");
  for (var i = 0; i < check.length; i++) {
    temp += parseInt(check[i]);
  }
  console.log(temp);
}
add(23);

//---------------------------------------------------------------------------------------------------------------

var num = 2717;
var sum = 0;
var val = 0;
var check = num.toString().split("");

for (var i = 0; i < check.length; i++) {
  sum += parseInt(check[i]);
}

let ans = sum.toString().split("");

for (var index = 0; index < ans.length; index++) {
  val += parseInt(ans[index]);
}

console.log(val);

//-----------------------------------------------------------------------------------------------------------------

//checking valid IP address.

let ipAddress = [
  '0.0.0.0',
  '192.158.1.238',
  '250.125.5.25',
  '119.252.1.55',
  '125.22.1.55',
  '256.10.0.45',
  '101,25.1.76',
];

for (let i = 0; i < ipAddress.length; i++) {
  let val = ipAddress[i].split('.');
  console.log(val);
  for (let j = 0; j < val.length; j++) {
    if ((parseInt(val[j]) > 255 && +val[j] >= 0) || (+val[j] <= 255 && +val[j] < 0)) {
      console.log(`IP address is not valid ${ipAddress[i]}`);
    }
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------
// In Arrays: In Arrays, values of corresponding elements get stored in the variables.

//  In order to give default values in arrays when applying the destructuring concept in arrays,
// we need to initialize values with some value. In this way, the default values will be assigned to the variables.

let a, b, c;
[a, b, c = 30, d] = [10, 20];

console.log(a); //10

console.log(b); //20

console.log(c); //30
console.log(d); //undefined

//--------------------------------------------------------------------------------------------------------------

// Compound Assignment Operator
//      Assignment operators are used to assign values to JavaScript variables.

// =  Assign
var x = 10;
var y = 5;
x = y;
console.log(x); // 5

// +=    Add assign
x += (y) => (x = x + y);
x = 10 + 5;
console.log(x); //15

// -=      Subract assign
x -= (y) => (x = x - y);
x = 10 - 5;
console.log(x); //5

// Multiply assign *=
x *= (y) => (x = x * y);
x = 10 * 5;
console.log(x); //50

// Division assign /=
x /= (y) => (x = x / y);
x = 10 / 5;
console.log(x); //2

// Mod assign %=
x %= (y) => (x = x % y);
x = 10 % 5;
console.log(x); //0

//-------------------------------------------------------------------------------------------------------------
