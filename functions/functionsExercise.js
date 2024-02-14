/*

Difficulty Level: Low
1) Declaring functions
This first exercise is for learning how to declare a function. 
In this case you must declare a named function called "add" that within its body,
 must execute an instruction that displays the result of 100 x 20 in the console.
*/

function add() {
    console.log(100*20);
}


/*
2)Calling/executing functions.
We already have the declaration, the next step is to call/execute the "add" function. 
Execute it and check that the result is displayed in the console.
*/

add();


/*
3)Adding parameters.
Now it's time to add parameters to our function. Add two parameters and call them whatever you want. 
Remember to indicate within the body of the function where those parameters will go.
*/

function add(num1,num2) {
    console.log(num1*num2);
}

add(15,32)


/*
4)Using arguments.
We have already added parameters to the declaration of our function, the next step is to "pass it arguments".
To do this,  create two variables like the following in the example:
let number1 = 100;
let number2 = 20;
*/

let number1 = 100;
let number2 = 20;

add(number1, number2)

/*
5)Adding the <return>.
With our named function set up correctly, it's time to change the console.log of the function body.
 Create a result variable inside the function body that will store the result of 100 x 20, 
 and have the function returns that variable.
*/

let functionChange = function add(num1, num2) {
    let result=num1*num2;
    return result;
}

/*
6) Convert the named function
 from the previous exercise into an anonymous function and call/execute it.

*/
let executeIt = function(num1, num2) {
    let result=num1*num2;
    return result;
}

let numero1=10;
let numero2=2;
let show = executeIt(numero1, numero2)
console.log(show);

/**--------------------------------------------------------------------- */

/*
 Difficulty Level: Medium
 
1) Create a named function called "greet" that
receives a string parameter representing a name, and
displays a custom greeting using the provided name in the console.
Call/run the function with your own name to verify that it works correctly.
 */

function greet(name) {
    console.log(`Hi ${name} :), nice to see you`);
}

let personalName ="Christian";

greet(personalName);

/**
 2)Create an anonymous function that

receives two numerical parameters and

returns the result of the multiplication of both.

Calls/executes the function with two different values and displays the result via console.
 */

const multiplication = function (num1, num2) {
    return num1*num2;
}

let resultOne =multiplication(12,24);
let resultTwo =multiplication(16,10);

console.log(resultOne);
console.log(resultTwo);

/**
 3) Create a named function called "area" that

receives two numerical parameters, one representing the base and the other the height of a triangle.

return its area.
 */

function area (base, height) {
    return ((base*height)/2)
}

console.log(area(15,30));

/**
 4) Create another named function called "perimeter" that

receives three numerical parameters that represent each of the sides of a triangle, and

returns the perimeter of the triangle.

Tip! Remember the formulas for area and perimeter of triangles.

 */


function perimeter (side1, side2, side3) {
    return side1+side2+side3;
}

console.log(perimeter(3,6,8));

/**
 5) Create an function that

takes two numerical parameters representing the price and quantity of a product,

and returns the total price of the purchase.

If the number of products is greater than or equal to 10, ==> a 10% discount applies to the total price.

If the number of products is greater than or equal to 20, ==> a 20% discount applies to the total price.

Call/run the function with different price and quantity values to verify it works correctly
 */

function total(price, quantity) {
    if (quantity>=10 && quantity<20) {
        return (price - (price*0.10)) ;
    }
    else if(quantity>=20){
        return (price - (price*0.20));
    }
    else{
        return price;
    }
}

console.log(total(3000,20));
console.log(total(6000,10));
console.log(total(3000,10));

/**
 6)Create a named function called isAnAdult that

receives a numeric parameter representing the age of a person, and

returns a message indicating whether the person is an Adult or not.

If Age is greater than or equal to 18 "You are an adult"

If Age is less than 18 "You are not an adult"
Call the function with different age values to verify that it works correctly.

Call the function with different age values to verify that it works correctly.
 */

function isAnAdult(age) {
    if (age>=18) {
        return console.log("You are an adult");
    }
    else{
        return console.log("You are not an adult");
    }
    
}

isAnAdult(18);
isAnAdult(15);
isAnAdult(38);
isAnAdult(8);

/**------------------------------------------------ */

/**
 *Difficulty Level: High

1) Create a function (declare it as you want) that

takes a numerical parameter that represents a person's annual income, and

returns the tax they must pay.

If Income less than or equal to $10,000, ==> tax of 10% of income.

If Income greater than $10,000 and less than or equal to $20,000, ==> tax of 15% of income.

If Income greater than $20,000, ==> tax of 20% of income.

Use nested conditionals to implement this function.

Call/execute the function with different input values to verify that it works correctly.
 */

function totalTaxes(annualIncome) {
    if (annualIncome<=10000) {
        return annualIncome*0.10
    }
    else if (annualIncome>10000 && annualIncome<=20000) {
        return annualIncome*0.15
    }
    else{
        return annualIncome*0.20
    }
}

console.log(totalTaxes( 10000));
console.log(totalTaxes( 18000));
console.log(totalTaxes( 20000));
console.log(totalTaxes( 40000));

/**
 2) Create a function (declare it as you want) to check for a day that

receives a numerical parameter and

returns a message indicating whether it is a business day or not.

If the number is 1, 2, 3, 4, 5, message: "It is a business day."

If the number is 6 or 7, message: "It's the weekend."

Use the nested switch control structure to implement this function.

Call the function with different day values to verify that it works correctly.
 */

function checkDay(num) {
    switch (num) {
        case 1:
            console.log("It is a business day");
            break;
        
        case 2:
            console.log("It is a business day");
            break;

        case 3:
            console.log("It is a business day");
        break;

        case 4:
            console.log("It is a business day");
        break;

        case 5:
            console.log("It is a business day");
        break;

        case 6:
            console.log("It's the weekend.");
        break;

        case 7:
            console.log("It's the weekend.");
        break;

        default:
            break;
    }
}

checkDay(2);
checkDay(6);
checkDay(5);
checkDay(7);


/**
3) Create a program using a function (declare it as you want) that takes a parameter that represents Personal Information (enter by keyboard). 

First the Name must be entered, and

if it comes empty ==> the program must stop and display a console.error with a message “The name cannot be empty”

Then the user must be asked to enter the Last Name and it must be validated as the Name in previous step.

Finally, the user must be asked to enter the age and it must be validated too.

Once all the data were verified, the function must save all that data in an object with 3 properties: first name, last name and age and display it through the console.

To finish, the function must be called/executed and tested with different values.


 */


function information(name, lName, age) {
    if(name.length==0){
        console.error("The name cannot be empty");
        return;
    }
    else if (lName.length==0) {
        console.error("The last name cannot be empty");
        return;
    }
    else if (age.length==0) {
        console.error("The age cannot be empty");
        return;
    }
    else{
        let personInfo={
            firstName: name,
            lastName:lName,
            ageInfo: age,
        }
        return console.log(`The name is: ${personInfo.firstName}, the lastname is ${personInfo.lastName} and the age is ${personInfo.ageInfo}`);
    }
}

let nameInfo =prompt("put your name");
let lastNameInfo =prompt("put your last name");
let ageInfo =prompt("put your age");

information(nameInfo,lastNameInfo, ageInfo);


/**
 4) Create a program that is made up of 3 functions (declare them as you want):

1st greet function: that takes a parameter that represents a name and returns a string “Hello, my name is [ parameter ]”

2nd function: calculateAge: which takes two parameters that represent the year of birth and the current year. This function will return the result of the current year minus the year of birth.

3rd function: present: call/execute the other two functions and execute an alert with the user's presentation

The user's data must be entered on the screen and the final result also displayed on the screen
 */

function greetHello(name) {
    let name2="Hello, my name is " + name
    return name2;
}

function calculateAge(year, birth) {
    return year-birth;
}

function presentation(name, year, birth) {
    let name3 = greetHello(name);
    let resultYear=calculateAge(year, birth)
    alert(`${name3} and my age is ${resultYear}`)
}

let namePresentation= prompt("put your name");
let actualYear=prompt("put the actual year");
let birthYear=prompt("put your birth year");
console.log(`${greetHello(namePresentation)}`);
let year=calculateAge(actualYear, birthYear);
console.log(`My age is ${year}`);
presentation(namePresentation,actualYear,birthYear );