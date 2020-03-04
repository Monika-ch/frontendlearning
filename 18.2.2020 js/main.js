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
function wordBlanks(myNoun, myAdj, myVerb, myAdverb){
    var result = "";
    result += "The" + myAdj + myNoun + myVerb + myAdverb + " to the store.";
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));      //Thebigdogranquickly to the store.   ..there is no space btwn the words.
console.log(wordBlanks(" dog", " big", " ran", " quickly"));  //The big dog ran quickly to the store.

function wordBlank(myNoun, myAdj, myVerb, myAdverb){
    var result = "";
    result += "The" + " " + myAdj + " " + myNoun + " " + myVerb + " " + myAdverb + " to the store.";
    return result;
}
console.log(wordBlank("dog", "big", "ran", "quickly"));     //The big dog ran quickly to the store.


console.log(wordBlank("bike", "slow", "flew", "slowly"));





//STORE MULTIIPLE VALUES WITH ARRAYS
var ourArray = ["John", 23];
var myArray = ["Quincy", 1];


//NESTED ARRAYS
var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray = [["Bulls", 23], ["White Sox", 45]];
console.log(ourArray);
console.log(myArray);

//ACCESSS ARRAY DATA WITH INDEXES
var ourArray = [50,60,70];
var ourData = ourArray[0];
console.log(ourData);  //50
var myArray = [50,60,70];
var myData = myArray[1];
console.log(myData);  //60

//MODIFY ARRAY DATA WITH INDEXES
var ourArray = [18,64,99];
ourArray[1] = 45;
console.log(ourArray);  //[18, 45, 99]
var ourArray = [18,45,99];
myArray[2] = 45;
console.log(myArray);   //[50, 60, 45]

//ACCESS MULI-DIMENSIONAL ARRAYS WITH INDEXES
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];
var myData = myArray[0][0];     //first[] means array data 1 (here its [1,2,3]), second[] means array data (here its 1) within array data 1 [1,2,3]
console.log(myData);            //1
var myData = myArray[0][1];
console.log(myData);            //2
var myData = myArray[0][2];
console.log(myData);            //3
var myData = myArray[1][0];
console.log(myData);            //4
var myData = myArray[1][1];
console.log(myData);            //5
var myData = myArray[1][2];
console.log(myData);            //6
var myData = myArray[2][0];
console.log(myData);            //7
var myData = myArray[2][1];
console.log(myData);            //8
var myData = myArray[2][2];
console.log(myData);            //9
var myData = myArray[3][0];
console.log(myData);            //[10, 11, 12]
var myData = myArray[3][1];
console.log(myData);            //13
var myData = myArray[3][2];
console.log(myData);            //14
var myData = myArray[3][0][0];
console.log(myData);            //10
var myData = myArray[3][0][1];
console.log(myData);            //11
var myData = myArray[3][0][2];
console.log(myData);            //12


//MANIPULATE ARRAYS WITH PUSH()........to ADD towards end
var ourArray = ["Simpson", "J", "Cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);          //[["Simpson", "J", "Cat", ["happy", "joy"]]
var myArray = [["John",23], ["Cat",2]];
myArray.push(["dog",3]);
console.log(myArray);           //[["John",23], ["Cat",2], ["dog",3]]


//MANIPULATE ARRAYS WITH POP()........to REMOVE last element towards end
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(removedFromOurArray);       //3.......(now our array is [1,2])
var myArray = [["John",23], ["Cat",2]];
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);       //["Cat",2].......(now our array is ["John",23])


//MANIPULATE ARRAYS WITH SHIFT()........to REMOVE first element
var ourArray = ["Simpson", "J", "Cat"];
var removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);       //Simpson.......(now our array is ["J", "Cat"])
var myArray = [["John",23], ["Cat",2]];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);       //["John",23].......(now our array is [Cat",2]


//MANIPULATE ARRAYS WITH UNSHIFT()........to ADD element in the beginning of the array
var ourArray = ["Simpson", "J", "Cat"];
ourArray.unshift("Harry");
console.log(ourArray);       //["Harry", "Simpson", "J", "Cat"]
var myArray = [["John",23], ["Cat",2]];
myArray.unshift(43);
console.log(myArray);       //[43, ["John",23], [Cat",2]]

//we also can REPLACE 1st element by using SHIFT and then UNSHIFT as follows
var ourArray = ["Simpson", "J", "Cat"];
ourArray.shift();
ourArray.unshift("Harry");
console.log(ourArray);       //["Harry", "J", "Cat"]....Simpson was replaced by Harry
var myArray = [["John",23], ["Cat",2]];
myArray.shift();
myArray.unshift(43);
console.log(myArray);       //[43, [Cat",2]].......43 replaced ["John",23]


//SHOPPING LIST
var myList = [["cereal",3], ["milk",2], ["bananas",3], ["juice",2], ["eggs",12]];
console.log(myList);






//WRITE REUSABLE CODDE WITH FUNCTIONS
function functionName() {
    console.log("Hi there!");
}
functionName();             //every time function name(here, functionName) wud be invoked/called, it will say Hi there!

function ourReusableFunction() {
    console.log("Heyya, world");
}
ourReusableFunction();      //Heyya, world

function reusableFunction() {
    console.log("Hi, world");
}
reusableFunction();         //Hi, world



//PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);      //5....a-b = 10-5 = 5

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5);         //15....a+b = 10+5 = 5



//GLOBAL SCOPE(:visibility of variables(:variables that are defined outside function block have global scope(:can be seen everywhere in ur js code))) AND FUNCTIONS
var myGlobal = 10;

function fun1(){
    oopsGlobal = 5;         //its a variable outusing var keyword; if writing variable like this, variable becomes global(could be seen in whole js even outside function block) and defined 
}

/*function addNumbers(){
    var sumTill10 = 0 + 1 + 2 + 3 + 4 + 5 +6 +7+8+9+10 +11;
    return sumTill10;
}

sumTill10 = 100;
*/

function fun2(){
    /*console.log("Sum of 10 numbers" + addNumbers() * 100)
    console.log("Sum till 100:" + sumTill10);*/

    var output = "";
    if (typeof myGlobal != "undefined"){                //!= this means not equals to
        output += "myGlobal: " + myGlobal; 
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);                         //by calling both functions fun1 & fun2 outside function block, it ouputs- myGlobal: 10 oopsGlobal: 5
}
fun1();
fun2();
// for(i=0; i < 10; ++i) fun2();


                        // VS

/*         
var myGlobal = 10;

function fun1(){
    var oopsGlobal = 5;     //its a variable using var keyword; if writing variable like this in a function block, variable becomes undefined 
}

function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal; 
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);    //calling both functioins outputs- myGlobal: 10
}
fun1();
fun2();
*/


/*
// LOCAL SCOPE AND FUNCTIONS
function myLocalScope(){
    var myVariable = 5;
    console.log(myVariable);     //5
}
myLocalScope();

console.log(myVariable);        //gives error if console.log outside function block coz it looks for myVariable outside the function
*/


// GLOBAL VS LOCAL SCOPE IN FUNCTIONS
/* Varibles can have same name in global and local scope, in such case local scope takes precendence over global scope. */
// CASE 1
var outerWear = "T-Shirt";

function myOutfit() {

    return outerWear;
}
console.log(myOutfit());        //T-Shirt
console.log(outerWear);        //T-Shirt


// CASE 2
var outWear = "T-Shirt";

function outfit() {
    outWear = "Sweater";    //not adding var gave local scope precedence so console.log(OutWear) outputs Sweater not T-Shirt

    return outWear;
}
console.log(outfit());        //Sweater
console.log(outWear);        //Sweater


// CASE 3
var OutWear = "T-Shirt";

function Outfit() {
    var OutWear = "Sweater";    //adding var gave global scope precedence so console.log(OutWear) outputs T-Shirt not Sweater

    return OutWear;
}
console.log(Outfit());        //Sweater
console.log(OutWear);        //T-Shirt


//CASE 4
var outwear = "T-Shirt";

function OutFit() {
    var outwear = "Sweater";
    return outwear;
}  
console.log("I love my " + OutFit() + " and " + outwear + "!");



//RETURN A VALUE FROM A FUNCTION WITH RETURN
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));   //3

function add(num) {
    return num + 10;
}
console.log(add(55));       //65
console.log(add(100) + minusSeven(11));     //114
console.log(add(100) - minusSeven(11));     //106

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));      //25



// UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION
var sum = 0;
function addThree() {
    sum = sum + 3;
}
console.log(sum);           //0
console.log(addThree());    //undefined coz return not mentioned

function addFive() {
    sum += 5;
}
console.log(addFive());     //undefined
console.log(sum);           //8



//ASSIGNMENT WITH A RETURNED VALUE

var changed = 0;

function change(num) {
    return (num + 5)/3;
}
changed = change(10);
console.log(changed);       //5

var processed = 0;

function process(num) {
    return (num + 3)/5;
}
processed = process(7);
console.log(processed);     //2



//STAND IN LINE
//CASE 1
function next(arr, item) {
    arr.push(item);
    return item;
}

var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));      //Before: [1,2,3,4,5]
console.log(next(testArr, 6));                          //6
console.log("After: " + JSON.stringify(testArr));       //After: [1,2,3,4,5,6]

//CASE 2
function Next(Arr, Item) {
    Arr.push(Item);
    return Arr.shift();
}

var TestArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(TestArr));      //Before: [1,2,3,4,5]
console.log(Next(TestArr, 6));                          //1
console.log("After: " + JSON.stringify(TestArr));       //After: [2,3,4,5,6]



//BOOLEAN VALUES
