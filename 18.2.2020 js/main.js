console.log("Hello from JavaScript")

// COMMENTS.....

var number = 5; // in-line comment

/* this
is
a
multiline
comment */

var number = 8;




/* Data Types:
undefined, null, boolean, string, symbol, number, and object....... 
*/
// EXAMPLES......

var myName = "Beau";             //string // var is used throughout the program.

myName = 8;                      //number

let ourName = "freeCodeCamp";    //let is used only where u declare it.

const pi = 3.14;                 //const has a constant value. it can't change. if it's changed, u'll get an error.




// DECLARING AND ASSIGNING VARIABLES......

var a;          // variable has been declared as 'a'!
var b = 2;      // variable has been declared as 'b' and 'b' has been assigned as '2' simultaneously!
console.log(a)  // in console.log(a), here 'a' is null (or undefined) coz no value has been assigned to it!
console.log(b); // here in console.log(b),'b' is 2 as it has been assigned to '2' !


a = 7;          // '7' has been assigned to 'a'!
b = a;          // 'b' has been declared to 'a'! so now 'b=a' !
console.log(a); // here in console.log(a),'a' is 7 coz it has been assigned to '7'!
console.log(b); // here in console.log(b),'b' is equal to 'a' and 'a' has been assigned to '7', so b=7 !




// INITIALIZING VARIABLES......

var a = 9;      // a has been declared, assigned by '=' operator and initialized as 9!

// inititalize these 3 variables
var a;
var b;
var c;

// initialized the above
var a = 5;
var b = 10;
var c = "I am a"

// do not change the code below this line
a = a + 1;          // console.log(a) will show a = 6
b = b + 5;          // console.log(b) will show b = 15
c = c + "String!";   // console.log(c) will show c = "I am a String!"



// CASE SENSITIVITY IN VARIABLES......

// for examples:

// Declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;

// even though the above case names are same, but the capitaliztion is not same so console will give an errror coz the given values havent been defined.

// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//now all the above is defined and wont give any errors.




// ADDITION IN JS

var sum = 10 + 0;
console.log(sum)        // 10
var sum = 10 + 10;
console.log(sum)        // 20

// SUBTRACTION IN JS

var difference = 45 - 0;
console.log(difference)        // 45
var difference = 45 - 33;
console.log(difference)        // 12

// MULTIPLICATION IN JS

var product = 8 * 0;
console.log(product)        // 0
var product = 8 * 2;
console.log(product)        // 16

// DIVISION IN JS

var quotient = 66 / 0;
console.log(quotient)        // Infinity
var quotient = 66 / 33;
console.log(quotient)        // 2

// INCREMENTING NUMBERS (incrementing a no. means adding 1 to it)

var myVar = 87;
myVar = myVar + 1;
console.log(myVar)        // 88
// or u can use a shortcut to this (myVar = myVar + 1)
myVar++;
console.log(myVar)        // 89.....  adding 1 to 88 so 89

// DECREMENTING NUMBERS ( decreasing a no. by 1)

var myVar = 11;
myVar = myVar - 1;
console.log(myVar)        // 10
// or u can use a shortcut to this (myVar = myVar - 1)
myVar--;
console.log(myVar)        // 9.....  decreasing 1 from 10 so 9




//DECIMAL NUMBERS or floats or floating nos.
var ourDecimal = 5.7;
var ourDecimal = 0.0009;

// MULTIPLY DECIMALS
var product = 2.0 * 0.0;
console.log(product)        // 0
var product = 2.0 * 2.5;
console.log(product)        // 5

// DIVIDE DECIMALS
var quotient = 0.0 / 2.0;
console.log(quotient)       //0
var quotient = 4.4 / 2.0;
console.log(quotient)       //2.2




// FINDING A REMAINDER .... sign for remainder = '%'
var remainder;
remainder = 11 % 3;
console.log(remainder)      // 2 ...coz 11/3=9 & 11-9=2 so remainder=2



//COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION
var a = 3;
var b = 17;
var c = 12;
 a = a + 12;       // adding a no. to same variable.
 b =  9 + b;
 c = c + 7;
/* shortcut
a += 12;
b += 17;
c += 7;
*/
console.log(a)      //15
console.log(b)      //26
console.log(c)      //19

//COMPOUND ASSIGNMENT WITH AUGMENTED SUBTRACTION
var a = 11;
var b = 9;
var c = 3;
 a = a - 6;       // subtracting a no. to same variable.
 b =  b - 15;
 c = c - 1;
/* shortcut
a -= 6;
b -= 15;
c -= 1;
*/
console.log(a)      //5
console.log(b)      //-6
console.log(c)      //2

//COMPOUND ASSIGNMENT WITH AUGMENTED MULTIPLICATION
var a = 5;
var b = 12;
var c = 4.6;
 a = a * 5;       // multiplying a no. to same variable.
 b =  3 * b;
 c = c * 10;
/* shortcut
a *= 5;
b *= 3;
c *= 10;
*/
console.log(a)      //25
console.log(b)      //36
console.log(c)      //46

//COMPOUND ASSIGNMENT WITH AUGMENTED DIVISION
var a = 48;
var b = 108;
var c = 33;
 a = a / 12;       // dividing a no. to same variable.
 b =  b / 4;
 c = c / 11;
/* shortcut
a /=12;
b /= 4;
c /= 11;
*/
console.log(a)      //4
console.log(b)      //27
console.log(c)      //3




//DECLARE STRING VARIABLES
var firstName = "Alan";
var lastName = "Turing";
var myFirstName = "Beau";
var myLastName = "Carnes";
console.log(firstName);
console.log(lastName);
console.log(myFirstName);
console.log(myLastName);




//ESCAPING LITERAL QUOTES IN STRINGS
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";  //put a backslash before any inside quotes.
console.log(myStr);      //I am a "double quoted" string inside "double quotes"

//QUOTING STRINGS WITH SINGLE QUOTES OR BACKTICKS
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
console.log(myStr);
//or we can simply use single quotes('') or backticks(``) for quoting strings (so that we do dont have to use backslashes) coz the above method (using backslashes) could be very confusing.
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);
var myStr = `<a href="http://www.example.com" target="_blank">Link</a>`;
console.log(myStr);
// infact we can quote a single-or-double-quoted-string with backticks..
var myStr = `'<a href="http://www.example.com" target="_blank">Link</a>'`;
console.log(myStr);

/*
CODE OUTPUT:
\`  BACKTICK
\'  SINGLE quote
\"  DOUBLE quote
\\  BACKSLASH
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

var myStr = "\"FirstLine\"\n\t\`SecondLine\`\n\'ThirdLine\'";
console.log(myStr);


//CONCATENATING(ADDING) STRINGS WITH PLUS OPERATOR
var ourStr = "I come First. " + "I come Second.";
console.log(ourStr);        //I come First. I come Second.

var myStr = "This is the start. " + "This is the end.";
console.log(myStr);         //This is the start. This is the end.

//CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR
var ourStr = "I come First. ";
ourStr += "I come Second.";
console.log(ourStr);        //I come First. I come Second.

var myStr = "This is the start. ";
myStr += "This is the end.";
console.log(myStr);         //This is the start. This is the end.

//CONSTRUCTING STRING WITH VARIABLES
var ourNam = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourNam + ", how are you?";
console.log(ourStr);        //Hello, our name is freeCodeCamp, how are you?

var myNam = "Beau";
var myStr = "My name is " + myNam + " and I am well!";
console.log(myStr);         //My name is Beau and I am well!

//APPENDING VARIABLES TO STRINGS
var adjctve = "awesome!";
var str = "freeCodeCamp is ";
str += adjctve;
console.log(str);                   //freeCodeCamp is awesome!

var adj = "worthwhile!";
var Str = "Learning to code is ";
Str += adj;
console.log(Str);                   //Learning to code is worthwhile!

//FIND LENGTH OF STRING
var firstNameLength = 0;
var firstName = "Ada"
firstNameLength = firstName.length;
console.log(firstNameLength);           //3

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);            //8

lastName += firstName;
console.log(lastName);                  //LovelaceAda
console.log(lastName.length);           //11

var x = "Saurabh";
var y = "Singh"
x += y;
console.log(x);                         //SaurabhSingh
console.log(x.length);                  //12

//BRACKET NOTATION TO FIND NTH CHARACTER IN STRING
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];      //A...........in JS number starts from 0 not 1; JS is zero base index!
console.log(firstLetterOfFirstName);
secondLetterOfFirstName = firstName[1];      //d
console.log(secondLetterOfFirstName);
thirdLetterOfFirstName = firstName[2];      //a
console.log(thirdLetterOfFirstName);
fourthLetterOfFirstName = firstName[3];      //undefined
console.log(fourthLetterOfFirstName);

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);         //L
secondLetterOfLastName = lastName[1];
console.log(secondLetterOfLastName);        //o
thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);         //v
fourthLetterOfLastName = lastName[3];
console.log(fourthLetterOfLastName);         //e
fifthLetterOfLastName = lastName[4];
console.log(fifthLetterOfLastName);         //l
sixthLetterOfLastName = lastName[5];
console.log(sixthLetterOfLastName);         //a
seventhLetterOfLastName = lastName[6];
console.log(seventhLetterOfLastName);       //c
eighthLetterOfLastName = lastName[7];
console.log(eighthLetterOfLastName);         //e

var x = "Saurabh";
x1st = x[0];
console.log(x1st);      //S
x2nd = x[1];
console.log(x2nd);      //a
x3rd = x[2];
console.log(x3rd);      //u
x4th = x[3];
console.log(x4th);      //r
x5th = x[4];
console.log(x5th);      //a
x6th = x[5];
console.log(x6th);      //b
x7th = x[6];
console.log(x7th);      //h
x8th = x[7];
console.log(x8th);      //undefined


//IMMUTIBILITY(CANT BE CHANGED/ALTERED IF CREATED) OF STRING
var myStr = "Jello World";
myStr[0] = "H";   //fix me
console.log(myStr[0]);      //J....H will not replace J coz u cant alter an individual letter of string. but u can change the whole string. eg is given below:
myStr = "Hello World";
console.log(myStr);         //Hello World


//BRACKET NOTATION TO FIND LAST CHARACTER IN STRING
var firstName = "Ada";
var firstLetterOfFirstName = firstName[firstName.length-1];
console.log(firstLetterOfFirstName);
var lastName = "Lovelace";
firstLetterOfLastName = lastName[lastName.length-1];
console.log(firstLetterOfLastName);

var x = "Saurabh";
var y = "Singh";
var xLast = x[x.length-1];
var yLast = y[y.length-1];
console.log(xLast);
console.log(yLast);


//BRACKET NOTATION TO FIND NTH-TO-LAST CHARACTER IN STRING
var x = "Saurabh";
var x3rdToLastLetter = x[x.length-3];
console.log(x3rdToLastLetter);

var y = "Singh";
var y2ndToLastLetter = y[y.length-2];
console.log(y2ndToLastLetter);




//WORD BLANKS
