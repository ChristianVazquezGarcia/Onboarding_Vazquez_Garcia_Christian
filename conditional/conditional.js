//Difficulty Level: Low

/*
1) Starting from the following example, 
create a conditional block that evaluates whether 
the variable num1 is greater than num2, if so, print
 the value of num1 via the console, otherwise print num2.
let num1 = 4
let num2 = 5
*/

let num1 = 4
let num2 = 4

if(num1>num2){
    console.log(`The major number is ${num1}`);
}
else{
    console.log(`The major number is ${num2}`);
}

/**
 2) Based on exercise 1, now modify the block as follows:

-If num1 is greater than num2, print num1 through the console,

-if num2 is greater, print num2 and finally

-if they are equal, print a string that says “The numbers are equal  
 */

if(num1>num2){
    console.log(`The greatest number is ${num1}`);
}
else if(num2>num1){
    console.log(`The greatest number is ${num2}`);
}
else{
    console.log("The numbers are equal");
}

/**
3) Based on exercise 1, create a conditional block that evaluates whether 
these variables are equal or not, if so,
print a string through the console “The numbers are equal”, 
otherwise “The numbers are different”
*/

if(num1==num2){
    console.log("The numbers are equal");
}
else{
    console.log("The numbers are diferent");
}

/*
4) Starting from the following example, create a conditional block that evaluates
whether one of these variables is greater than the other; if so, display 
“The date [variable 1] is greater than [variable 2]” by console, and, 
If they are the same, print “The dates are the same”
Tip! Use backticks to print via console.

let date1 = "2018-9-2"

let date2 = "2023-7-5"

The date 2023-7-5 is greater than the date 2018-9-2
*/

let date1 = "2018-9-2"

let date2 = "2023-7-5"

if(date1>date2){
    console.log(`The date ${date1} is greater than the date ${date2} `);
}
else if(date1==date2){
    console.log("The dates are the same");
}
else{
    console.log(`The date ${date2} is greater than the date ${date1}`);
}

/*
5) Now try changing the value of the variables. As in the previous exercises, 
a string must be printed through the console 
that says if date 1 is greater than date 2 or the opposite.
*/


let dateOne = "2018-9-2"

let dateTwo = "2015-7-5"

if(date1>date2){
    console.log(`The date ${dateOne} is greater than the date ${dateTwo} `);
}
else if(date1==date2){
    console.log("The dates are the same");
}
else{
    console.log(`The date ${dateTwo} is greater than the date ${dateOne}`);
}

/*
6)  In this case, create a conditional block that evaluates which of the
three numbers stored in the variables is the largest.
 Print a string through the console that says “The number [ ] is the largest”.
   

                    let number1 = 5

                    let number2 = 7

                    let number 3 = 9



*/

let numberA = 5
let numberB = 2
let numberC = 91

if(numberA>numberB){
    if(numberA>numberC){
        console.log(`The number ${numberA} is the largest`);
    }
    else if(numberB>numberC){
        console.log(`The number ${numberB} is the largest`);
    }
    else{
        console.log(`The number ${numberC} is the largest`);
    }
    
}
else if(numberB>numberA){
    if(numberB>numberC){
        console.log(`The number ${numberB} is the largest`);
    }

}
else console.log(`The number ${numberA} is the largest`);


//Difficulty Level: Medium

/**
 1)Using a "switch", create a program that allows you to enter these color
  names on the screen: red, blue or green. And print on the screen in each case:
red: “The color of passion”
blue: “The color of the sea.”
green: “The color of nature”
Tip! Don't forget the break statement

 */


let colour= prompt("write a colour")

switch (colour) {
        case "red":
        console.log("The color of passion");
        break;
        case "blue":
        console.log("The color of the sea.");
        break;
        case "green":
        console.log("The color of nature");
        break;
       
    default:
        console.log("Horrible colour");
        break;
}


/**
 2) Using a switch, create a program that allows you to enter on the screen: 
two numerical values (number from 1 to 100)
an operation (addition, subtraction, multiplication, division)
and print on the screen in each case:
sum: first value + the second
subtraction: first value - the second
multiplication: first value * second
division: first value / second
With the corresponding literal ("the sum of <num1> and <num2> is...", etc.)
Tip! Don't forget the break statement
 */


let val1=Number(prompt("write number from 1 to 100"))
let val2=Number(prompt("Write other number from 1 to 100"))
let valText=prompt("write the a aritmetic operation")
switch (valText) {
    case "adition":
        console.log(`the sum of ${val1} and ${val2} is ${val1+val2}`);
        break;

        case "substraction":
        console.log(`the substraction of ${val1} and ${val2} is ${val1-val2}`);
        break;

        case "multiplication":
            console.log(`the multiplication of ${val1} and ${val2} is ${val1*val2 }` );
        break;

        case "division":
            if(val2!=0){
                console.log(`the division of ${val1} and ${val2} is ${val1/val2}`);
            }
            else{
                console.log(" The division for 0 is not defined");
            }
        
        break;

        
    default:
        console.log("Thats not a basic aritmetic operation");
        break;
}


/**
 3)Starting from the following structure, create a conditional block that
receives 2 objects representing people with the properties: name, age, height
and print by console in the same console.log:
Which of the two people is the taller?
Which is the oldest?
Tip! You can use nested if or logical operators.
let person = {
       name = Juan,
       age = 39,
       height = 1.69
}
Example Result: "Juan is taller and older than Rosa"
 */

let person = {
    namePerson: "Juan",
    age: 39,
    height: 1.69
}

let person1= {
    namePerson: "Rosa",
    age: 35,
    height: 1.90
}

if (person.height>person1.height) {
    if (person.age>person1.age) {
        console.log("Juan is taller and older than Rosa");
    }
    else{
        console.log("Juan is taller than Rosa but isn't older than Rosa");
    }
}
else{
    if (person1.age>person.age) {
        console.log("Rosa is taller and older than Juan");
    }
    else{
        console.log("Rosa is taller than Juan but isn't older than Juan");
    }
    
}

/**
 4) Create a program that allows you to enter on the screen:
your name, age, height and vision.
and print through the console a string “You are qualified to drive”,
For this the person must:
Be at least 18 years old.
Measure more than 110 cm.
Have a vision of at least 8 out of 10.
Tip! Remember prompt( ) to enter data on the screen.
 */



function TestDrive(nameDriver, ageDriver, heightDriver,visionDriver) {
    if(ageDriver>=18 && heightDriver>110 && visionDriver>=8){
        console.log(`${nameDriver}, you are qualified to drive`);
    }
    else{
        console.log(`Sorry ${nameDriver}, you aren't qualified to drive`);
    }
}

let nameDriver1=prompt("Your name, please");
let ageDriver1=Number(prompt("Your age, please"));
let heightDriver1=prompt("Your height, please");
let visionDriver1=prompt("Your vision");
TestDrive(nameDriver1,ageDriver1,heightDriver1,visionDriver1);


/**
 5) Create a program that allows you to enter your age on the screen 
 and print it on the screen if you are:
infant (0 to 12 years)
adolescent (13 to 18 years old)
older young (19 to 45 years)
elderly (over 45 years)
Is he really that old? (more than 100 show)
Tip! Remember alert( ) to display data on the screen.
 */


function OlderOrNot(age) {
   if (age>=0 && age<13) {
    console.log("infant");
   }
   else if (age>=13 && age<19) {
    console.log("Adolescent");
   }
   else if (age>=18 && age<46) {
    console.log("Older young");
   }
   else if (age>=45 && age<100) {
    console.log("Elderly");
   }
   else{
    console.log("Is he really that old?");
   }
    
}

let age4= prompt("your age, please");
OlderOrNot(age4);

/**
 6) Create a program that allows you to enter only numbers from
  1 to 3 on the screen and then any other numerical data. Print on screen:
1: “The number entered is [ ]”
2: “Twice the number entered is [ ]”
3: “Three times the number entered is [ ]”
another: “That value is not allowed”
Tip! Remember alert( ) to display data on the screen.
 */


function exercise6(num1, num2) {
    if (num1>=1 && num1<=3) {
        if(num1==1){
            console.log(`The number entered is ${num2}` );
        }
        else if (num1==2) {
            console.log(`Twice the number entered is ${num2*2}`);
        }
        else{
            console.log(`Three times the number entered is ${num2*3}`);
        }
    }
    else{
        console.log("That value is not allowed");
    }
}

let numberOne= Number(prompt("Only numbers from 1 to 3, please"));
let numberTwo=  Number(prompt("Other number, please"));

exercise6(numberOne, numberTwo);


/**
 *
 * 
 * Difficulty Level: High
 * 
 1)Create a program that allows the following data to be entered on the screen:

Customer name, Pass (vip or normal), Entrance (yes or no).
People who have your name ==> show a welcome message
or VIP pass ==> show a welcome message
If you have a ticket, ask if you want to use it
If affirmative ==> show a welcome message
If negative ==> show farewell message
And finally in case of not having the same name or VIP pass or entry, ask "do you want to buy?". And in case:
negative ==> show farewell message
affirmative ==> ask for available money, in case:
More than 1000 ==> show a successful sale and welcome message
Less than 1000 ==> show sales rejection message
 */


function show(nameShow, pass) {
    if (nameShow=="Christian" || pass=="VIP") {
        console.log("Welcome to show");
    }
    else{
        let answer=prompt("Have you a ticket?")
        if (answer=="yes") {
            let answerTwo=prompt("Want use it?");
            if (answerTwo=="yes") {
                console.log("Welcome to show");
            }
            else{
                console.log("Bye Bye");
            }
            
        }
        else if (answer=="no") {
                let answerThree=prompt("Do you want to buy?")
                if(answerThree=="yes"){
                    let money=prompt("available money?")
                    if (money>=1000) {
                        console.log(`successful sale 
                                      Welcome to show`); 
                    }
                    else{
                        console.log("Rejected sale");
                    }
                }
                else{
                    console.log("Bye Bye");
                }
        
    }
    }
   
}
let nameShow1=prompt("name?");
let typePass=prompt("Type of pass?");
show(nameShow1,typePass);