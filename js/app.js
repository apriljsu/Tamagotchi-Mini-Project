console.log("check")

//1)Create an Object or Class using hunger,Sleepiness,boredom and age
class pet {
  constructor(name,age,hunger,boredom,sleepiness){
    this.name=name
    this.age=age
    this.hunger=hunger
    this.boredom=boredom
    this.sleepiness=sleepiness
  }
  //2) create functions for age, eat,hunger,boredom to decrement
  feed(){
    this.hunger--
  }
  sleep(){
    this.sleepiness--
  }
  play(){
    this.boredom--
  }
  }

//3)Instantiate your Tamagotchi (If you created a class)
const mametchi= new pet ("",0,5,5,5)
console.log(mametchi)
//4)HTML
//add background-animate it with css
//add welcome message and explain rules
// Add the ability to name your pet.
//Display a character of your choice on the screen to represent your pet-add egg pic
//
// Display the following metrics for your pet:
//
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age

// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
//
// Increase your pet's age every x minutes
//
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
//
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
//
// Morph your pet at certain ages.
//
// Animate your pet across the screen while it's alive.-use key frame animation with css
// You must have a game object or class for your Tamagotchi,and event listeners/handlers that call methods in your game object or class.
