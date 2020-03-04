//EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);       //learn where to use this coz console.log(document) will also give the same output
// console.log(document);
// console.log(document.domain);
// console.log(document.URL)
// console.log(document.title);
// // document.title = 123;       //can change the title directly from js, change in html not required
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello"
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
                // or //
var headerTitle =  document.getElementById('header-title');
console.log(headerTitle);
// headerTitle.textContent = 'Hello';       // both innerText and textContent can change the content of html(here header-title)
// headerTitle.innerText = 'Goodbye';       // but the only difference btwn these two is that one follows style given in html and one doesn't(look up in index.html file for h1 id header-title,there's span style given as display:none).
console.log(headerTitle.textContent);  // title shows Item Lister but console shows Item Lister 123     // textContent property overwrites style given in the html (here: <span style="display:none">123</span>) for the console
console.log(headerTitle.innerText);    // both title and console shows same result: Item Lister    // innerText property considers style given in the html (here: <span style="display:none">123</span>) for the console
// headerTitle.innerHTML  = '<h3>Hello</h3>';  // .innerHTML changes the content(html) inside the tag
console.log(headerTitle.innerHTML);            // <h3>Hello</h3>   Before console.log(headerTitle.innerHTML) it was <h1> Item Lister </h1>. After: <h1> <h3>Hello</h3> </h1>.
// headerTitle.style.borderBottom = 'solid 3px #fff';
var header =  document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #777';



// GETELEMENTSBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

/*  UNDERSTANDING LOOPS  */
var i=5;
i++;            //i++ or ++i adds 1 to the assigned value of i, here i=5, so i++ = 6
console.log(i); //6

var i=20;
i++;
console.log(i); //21

var i=5;
i--;            //i-- or --i subtracts 1 to the assigned value of i, here i=5, so i-- = 4
console.log(i); //4

var i=20;
i--;
console.log(i); //19


/* Add (increasing value by 1) */
for(var i = 0; i < 5; i++){
    console.log(i); //0,1,2,3,4   clg inside function continues to print in a loop until condition satisfies
}
console.log(i);   //5   clg outside function prints the final output i in the function

for(var i = 1; i < 5; i++){
    console.log(i); //1,2,3,4
}
console.log(i);     //5

for(var i = 1; i <= 5; i++){
    console.log("step" + i + ": " + i); //step1: 1, step2: 2,....step5: 5
}
console.log(i);     //6

for(var i = 1; i > 5; i++){
    console.log(i); // line not executed coz loop condition always false, i=1, and 1 cant be greater than 5, so false
}
console.log(i);     //1


/* Subtract (decreasing value by 1) */
for(var i = 5; i > 0; i--){
    console.log(i);     //5,4,3,2,1
}
console.log(i);         //0

for(var i = 5; i > -1; i--){
    console.log(i);     //5,4,3,2,1,0
}
console.log(i);         //-1

for(var i = 5; i >= 0; i--){
    console.log(i);     //5,4,3,2,1,0
}
console.log(i);         //-1

for(var i = 5; i > 6; i--){
    console.log(i); //line not executed, false condition 5 cant be greater than 6
}
console.log(i);     //5


/* sum of continuous nos.(eg: sum of 1,2,3,4,5) */
var sum = 0;
for(var i=1; i<=5; i++){
    sum+=i;
    console.log("value at step " + i + ": " + sum); //value at step 1: 1, value at step 2: 3, value at step 3: 6, value at step 4: 10, value at step 5: 15
}
console.log(sum);       //15
        // vs
var sum = 0;
for(var i=1; i <=5; i++,sum+=i){
    console.log("value at step " + i + ": " + sum); //value at step 1: 0, value at step 2: 2, value at step 3: 5, value at step 4: 9, value at step 5: 14
}
console.log(sum);       //20

var sum = 0;
for(var i = 6, j=1; i <= 10; i++, j++){
    sum+=i;
    console.log("value" + " at step " + j + " = " + sum);   //6,13,21,30,40
}
console.log(sum);       //40


/* sum of even nos. */
//sum of even nos. from 0 to 10
var sum = 0;
for(var i=0; i <= 10; i=i+2){
    sum+= i;
    console.log("value till " + i + " is " + sum);   //0,2,6,12,20,30
}
console.log(sum);       //30

//sum of even nos. from 2 to 10
var sum = 0;
for(var i=2; i <= 10; i=i+2){
    sum+= i;
    console.log("value till " + i + " is " + sum);   //2,6,12,20,30
}
console.log(sum);       //30

//sum of even nos. from 100 to 110
var sum = 0;
for(var i=100; i<=110; i=i+2){
    sum+= i;
    console.log("value till " + i + " is " + sum);   //100,202,306,412,520,630
}
console.log(sum);       //630


/* sum of odd nos. */
//sum of odd nos. from 1 to 10
var sum = 0;
for(var i=1; i<=10; i=i+2){
    sum+=i;
    console.log("value till " + i + " is " + sum);   //1,4,9,16,25
}
console.log(sum);       //25

/* sum of odd nos. */
//sum of odd nos. from 101 to 110
var sum = 0;
for(var i=101; i<=110; i=i+2){
    sum+=i;
    console.log("value till " + i + " is " + sum);   //101,204,309,416,525
}
console.log(sum);       //525

/* sum of multiples of 3 */
// sum of multiples of 3 from 9 to 30
var sum = 0;
for(var i=9; i<=30; i=i+3){
    sum+=i;
    console.log("value till " + i + " is " + sum);  //9,21,36,54,75,99,126,156
}
console.log(sum);       //156

/* sum of multiples of 5 */
// sum of multiples of 35 from 5 to 25
var sum = 0;
for(var i=5; i<=25; i=i+5){
    sum+=i;
    console.log("value till " + i + " is " + sum);  //5,15,30,50,75
}
console.log(sum);       //75

/* sum of multiples of 11 */
// sum of multiples of 11 from 11 to 144
var sum = 0;
for(var i=11; i<=144; i=i+11){
    sum+=i;
    console.log("value till " + i + " is " + sum);
}
console.log(sum);       //1001

/* sum uptil x*/
//
var sum=0;
for(var i=0; sum<=150; i++){
    sum+=i;
    console.log(sum);
}
console.log(sum);   //outputs 153, we wanted sum shudnt be more than 150, so WRONG METHOD 

var sum=0;
for(var i=0; ; i++){
    if (sum + i > 150)
    {
        break;
    }
    sum+=i;
    console.log(sum);
}
console.log(sum);


// note: sum of even,odd nos; multiples of 3,5,7; sum uptil x;
for(var i = 6; i >= 0; i=i-2){
    console.log("I am right now : " + i);
}
var sum = 0;

// for(var i = 5, j=1; sum <= 150; i=i+5, j=j+1){
//     sum += i;
//     console.log("Sum at " + j + " step is: " + sum);
// }

// sum = 0;
// for(var i = 5, j=1; sum + i <= 20; i=i+5, j=j+1){
//     sum += i;
//     console.log("Sum at " + j + " step is: " + sum);
// }
// console.log("Value of sum after loop is " + sum);

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f5f5';
//     console.log("Value of i right now is " + i + " and we changed the color of item: " + i);
// }