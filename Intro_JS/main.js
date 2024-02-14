let myName="Christian "
let myLastname="Vazquez Garcia "
let myAge=26
let myPet=" Pepe "
let myPetAge= 2
let fullName= myName+myLastname
let presentationText= `My name is ${fullName}, i'm ${ myAge} years old, I have a dog called ${myPet} he is ${myPetAge} years old`

console.log(presentationText)

//Medium level


//1

let sumAges
let substractAges
let productAges
let divisionAges

sumAges= myAge+myPetAge
substractAges=myAge-myPetAge
productAges=myAge*myPetAge
divisionAges=myAge/myPetAge

/*console.log(`${sumAges} ------ ${substractAges}------ ${productAges}----${divisionAges}`)*/


//2

const student={
    name:"marco",
    lastName:"sanchez",
    age:25,
    favouriteColour:"green",
    sportTeam:"Migthy Ducks",

}

console.table(student);
console.log(student.name);
console.log(student.lastName);
console.log(student.age);
console.log(student.favouriteColour);
console.log(student.sportTeam);

//3

const pet={
    namePet:"juan",
    kindOfAnimal:"cat",
    agePet:3,
    colour:"orange",
    favouriteFood:"fish",
}

console.table(pet);
console.log(pet.namePet);
console.log(pet.kindOfAnimal);
console.log(pet.agePet);
console.log(pet.colour);
console.log(pet.favouriteFood);

//4

let fruits= ["lime", "pineapple", "watermelon", "apple", "orange"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

//High level--------------------------------

//1

let imAddult=prompt("cuantos años tenes?")
if(imAddult>18){
    console.log("Congratulations, you are addult");
}
else{
    console.log("sorry, you are too young yet :(");
}




//2

const numbers=[1,2,3,4,5,6,7]

for(let i=0; i < numbers.length;i++){
    console.log(numbers[i]);
}

//3

const family =[
    {
        personalName:"raul",
        personalAge:22,  
    },
    {
        personalName:"Macarena",
        personalAge:25,   
    },
    {
        personalName:"Bryan",
        personalAge:17,   
    },
    {
        personalName:"Agustina",
        personalAge:32,   
    },
    {
        personalName:"Nicole",
        personalAge:29,   
    },
    
]



for(let i=0; i < family.length;i++){
    console.log(family[i]);
    console.log(family[i].personalName);
    console.log(family[i].personalAge);
}


//4

let randomText = `${fruits[1]} ${numbers[3]} ${family[4].personalName}`
console.log(randomText);
