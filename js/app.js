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
    this.hunger=this.hunger-1
  }
  sleep(){
    this.sleepiness--
  }
  play(){
    this.boredom--
  }
  }

  //4)Instantiate your Tamagotchi (If you created a class)
  const mametchi= new pet ("",0,1,1,1)
  //add pet name
  function petName(){
  petName=document.getElementById("petname").value
  document.getElementById("petdes").innerText=`Hi! I am your pet ${petName}!`
  }
  //add age
  function setAge(){
  setInterval(displayAge,30000)
  function displayAge(){
    if(mametchi.hunger>=10){
    document.getElementById("age").innerText="your pet has died from starving"
  }else{
    document.getElementById("age").innerText=mametchi.age++
  }
    }
  }
  document.querySelector("#submit").addEventListener("click",setAge)
  // add Hunger
  function setHunger(){
    setInterval(displayHunger,2000)
    function displayHunger(){
      if(mametchi.hunger>=10){
        document.getElementById("hunger").innerText="your pet has died from starving"
      }else{
        document.getElementById("hunger").innerText=mametchi.hunger ++
      }
    }
  }
  document.querySelector("#submit").addEventListener("click",setHunger)
//add event listeners to feed button
document.getElementById("feed").addEventListener("click",(e)=>{
  mametchi.feed()
  document.getElementById("hunger").innerText=mametchi.hunger
})


  // document.getElementById("hunger").innerText=mametchi.hunger
  // document.getElementById("boredom").innerText=mametchi.boredom
  // document.getElementById("sleepiness").innerText=mametchi.sleepiness
  // document.getElementById("submit").addEventListener("click",petName())
  // Increase your pet's age every x minutes
  //
  // Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.


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
