/**
 Difficulty Level: Low
1)Using a "for" loop, create a program that allows the entry of a 
number between 1 and 100 through a prompt, Then it prints through 
the console all the numbers that are between the entered number 
and 0 (that is, in descending order ).

 */



let number=Number(prompt("put a number between 1 and 100"));

for (let i=number; i>=0; i--){
    console.log(i);
};



/**
 2)Using a "for" loop, make a program that allows the entry 
 of a number through a prompt between 1 and 10,
 and displays through the console it multiplication table 
 (the first 10 multiples only).

 */



 let number2 = Number(prompt("put a number between 1 and 10"));

for (let i=1; i <=10; i++) {
    console.log(i + "x" + number2 + "=" + number2*i);
    
 }


 /**
  3)Using a "while" loop, create a program that allows the entry 
  of numbers through a prompt. The numbers must be added (acumulated) 
  into a resulting variable. The entry of numbers will end when the 
  user enters a 0. At the end, display the value of the
   sum variable through console.

Suppose you entered 1 then 3 then 0. This would be the result: 4. 
Tip! Be careful, remember that the promt returns a string.
  */


let number3= Number(prompt("put a number"));
let sum=0;

while (number3!=0) {
    
    sum=sum+number3;
    number3= Number(prompt("put a number"));
    if (number3==0) {
        console.log(sum);
    }


}

/*
4) Using now a "do while" loop and following the same instructions
as the previous exercise, display in the console, the value of
 the variable that accumulates the sum of the numbers entered.

Suppose you entered 1 then 3 then 0. This would be the result: 4

Tip! use backticks for this.
*/


let number4= Number(prompt("put a number"));
let sum1=0;

do{
    sum1=sum1+number4;
    number4= Number(prompt("put a number"));
    if (number4==0) {
        console.log(sum1);
    }
}
while (number4!=0) {
    
}



/**
 *5) Using a "for in" loop, create an object with at least 5 properties,
  make a program that cycles through said object and only shows all 
  the keys of its properties in the console.

In the console it should look like this:

name

lastName

origin

studies


 */

let person={
    name:"pedro",
    lastName:"rodriguez",
    origin:"mexico",
    studies:"engineer",
    age: 30,
}

for (prop in person) {
    console.log(prop); 

    }

for(prop in person){
    console.log(person[prop]);
}

/*---------------------------------------------*/

/**
 *Difficulty Level: Medium
Using the loop that you consider, we are going to use the variable that
 stored the sum of the numbers in exercise #3 as a "secret number".
  The new program will allow numbers to be entered through a prompt 
  until the number entered is equal to the one saved in the variable of exercise #3.

If the value entered is greater than the "secret" number, 
notify the user through the console ("the number entered 
is greater than the secret", the same if the value is less.

So on until the user guesses the secret number. Finally,
 show a congratulatory message on the screen and tell you
  how many attempts you have made ("You got it right! 
  The secret number was <number> and you made <x> attempts"
 */

  let secretNumber = sum;
  let i=0;
  let number6= Number(prompt("put a number"));

  while(number6!=secretNumber){
    if (number6>secretNumber) {
        console.log(`the number entered 
        is greater than the secret`);
    }
    else{
        console.log(`the number entered 
        is less than the secret`);
    }
    i++;
    number6= Number(prompt("put a number"));
  }

  console.log(`You got it right! 
  The secret number was ${secretNumber} and you made ${i} attempts`);


  /**
   2) Using the loop that you consider as correct, 
   create a program that receives a number through
    a prompt and displays all its divisors (dividers)
     through the console.

Tip: DIVISORS/DIVIDERS: are all natural numbers that exactly
 divide another natural number. Example: “The divisors of '15' are: 1, 3, 5 and 15.
  (The division of '15' between any of these numbers is exact)

Suppose 50 was entered. This would be the result 50, 25, 10, 5, 2, 1
Tip! remember or investigate the operator %
   */


let number7= Number(prompt("put a number"));

for (let i= 1; i<= number7; i++) {
    if (number7%i == 0 ) {
        console.log(`The divisors of ${number7} are: ${i}`);
    }
    
}


/**
 3)Taking into account the ringing Bell function, create a loop
  (the one you consider) that displays a string through the console 
  that in turn concatenates the string that the function returns
   as many times as the number that the user enters on the keyboard.

For example, if the user enters the number 5, the result should be:
Ding Dong, Ding Dong, Ding Dong, Ding Dong, Ding Dong

function RingBell() {

     console.log("Ding Dong");

     return "Ding Dong,"

{


 */


let number8=Number(prompt("put a number"));


function RingBell() {

   console.log("Ding Dong");

    return "Ding Dong,"

};



let ring1=" ";

for (let i = 0; i < number8; i++) {
    ring1 += RingBell();
}
console.log(ring1);


/**
 4)
 Starting from the constants dateLimit and dates, 
 make a loop (the one you consider) that shows in the
 console the dates in the array that are greater than
  or equal to the date stored in the constant dateLimite.

const dateLimit = "1997-8-3"

const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]
 * 
 */

const dateLimit = "1997-8-3"

const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

for (let i = 0; i < dates.length; i++) {
    if (dates[i]>=dateLimit) {
        console.log(dates[i]);
    }
    
}


/**
 * 5)Using a "for of" loop, create an array of strings with 
 * colors and print each of the colors included
 *  in the array through the console.
 */




let vec2=["red","green","blue","yellow","black"];


for (color1 of vec2) {
    console.log(color1);
}



/**
 * 6)Now take the loop from the previous exercise as a reference
 *  and place it inside a function so that it performs the same task but can
 *  be reused as many times as necessary without having to rewrite the loop code.
 */



function arrayColor(vec) {
    for (color of vec) {
        console.log(color);
    }
}

arrayColor(vec2);



/**
 *7)Using a "for of" loop, create an array with 5 numbers
  and make a program that runs through that array
   and displays the double of each of the elements, in the console.
 */


function arrayNumbers(array) {
    for (i of array) {
        console.log(`The number is ${i} and it's double is ${i*2}`);
    }
}
let arrayTwo=[1,2,6,9,7];
arrayNumbers(arrayTwo);

/**
 * 8)
 * Using the loop that you think is correct, create an array with at 
 * least 4 objects with 4 properties, each of those created objects
 *  must represent a member of a family group
(they can be fictitious people).

Then make a program (by saying program the intention is that it 
    is not just the loop, but rather a function that contains the loop)
     that displays a presentation message for each element of the array
      through the console.

In the console it should look like the example.

Hello, I am María Lopez (mother) and I am 40 years old.
Hello, I am Juan Perez (father) and I am 38 years old.
Hello, I am Romina Perez (daughter) and I am 13 years old.
Hello, I am Tomás Perez (son) and I am 10 years old.

Object Model

{name: 'Juan', last-name: 'Perez', age: 38, member: 'father'}

Tip! use backticks for this
 */

let arrayFamily=[
    {
        nameFam:"Pedro",
        last_Name:"Perez",
        memeberFam:"father",
        ageFam:36
    }
,
    {
        nameFam:"Maria",
        last_Name:"Musicardi",
        memeberFam:"Mother",
        ageFam:35
    }
,
    {
        nameFam:"Antonio",
        last_Name:"Perez",
        memeberFam:"son",
        ageFam:5
    }
,
    {
        nameFam:"Emilia",
        last_Name:"Perez",
        memeberFam:"daugther",
        ageFam:3
    }
,
    {
        nameFam:"Jorge",
        last_Name:"Perez",
        memeberFam:"son",
        ageFam:1
    }
]

function familyPresentation(vec) {
    for (family of vec) {
        console.log(`Hello, I am ${family.nameFam} ${ family.last_Name} ( ${family.memeberFam}) and I am ${family.ageFam} years old.`);
            
        }
    
}

familyPresentation(arrayFamily);



/******------------------------------------------------------- */

/**
 *Difficulty Level: High
 
1)Using the loop that you consider, create a program that

allows the entry of numbers on the screen through a prompt and

calculates the sum of the even numbers on the one hand and

the odd numbers on the other.

The data entry ends when the user enters a 0. 

In the console it should look like this (for example):

Even number: 38

Odd numbers 30
 */


function evenOrOdd() {
    let number9= Number(prompt("Put a number"));
let sumEven=0;
let sumOdd=0;
while(number9!=0){
    
    if (number9%2==0) {
        sumEven+=number9
    }
    else{
        sumOdd+=number9
    }
    
    number9= Number(prompt("Put a number"));
}

console.log(`Even numbers: ${sumEven}`);
console.log(`Odd numbers: ${sumOdd}`);
}

evenOrOdd();


/**
 * 2) Using the loop that you think is correct,
 * create an array of 10 numbers and make a program 
 * that prints the largest number in the array, on the screen.
 */

function createArray(){
    
    let vec=[];
    
    for (let i = 0; i < 10; i++) {
        numbers2=Number(prompt("put number"));
        vec[i]=numbers2;
    }
    return vec;
}


function readArray(vec) {
    let greatest=0;
    for (let i = 0; i < vec.length; i++) {
        if (vec[i]<vec[i+1]) {
            
            greatest=vec[i+1];
            vec[i]=greatest;
        }
        else if(vec[i]>vec[i+1]){
            greatest = vec[i];
            vec[i+1]=vec[i];
        }
        
    }
    console.log(greatest);
}

readArray(createArray());