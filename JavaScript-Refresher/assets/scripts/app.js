//Modules
import {API_Key} from "../scripts/utlis.js"

import topic from "../scripts/utlis.js"

//import * as util from "../scripts/utlis.js" to import all andd then should be accesed util.name


console.log(API_Key);
console.log(topic);

let userMessage = "Good Morning"

console.log(userMessage);

console.log(6*3);
console.log("Hello" + "World!",userMessage)


// === checks typeof too
console.log(10 == "10");   //true
console.log(10 === "10");  //false


function greet(name="User")
{
    console.log(`Good Morning ${name}`)
}

greet("James");
greet();

//Arrow Functions ()=>{}
//Very much used while creating anonymous functions

()=>{
    console.log("Arrow Functions")
}

//objects
//objects can also store a function
const user =
{
    name : "Ganesh.H",
    age: 22,
    bio(name,age)
    {
      console.log(`${this.name} is ${this.age} years old!`);
      
    }
};

console.log(user);
console.log(user.name);
user.bio();

//Arrays
const hobbies = ["Coding","Traveling","Watching Movies","Cricket"];
hobbies.push("Exercise")

for(let i = 0;i< hobbies.length;i++)
{
    console.log(hobbies[i]);
    
}

hobbies.map((hobby)=>
{
    console.log(hobby + "!");
})

//Array Destructuring 

const[firstName,lastName] = ["Jason","Bourne"];

const newHobbies = ["Reading"];


//spread operator
const mergedhobbies = [...hobbies,...newHobbies];
console.log(mergedhobbies); //merges both

const extendedUser =
{
    isGraduated : true,
    ...user
}

console.log(extendedUser)

function init()
{
    function greeting()
    {
        console.log('Hi!');
        
    }
    greeting();
}

init();

