//create button variables

//Create an Object or Class using hunger,Sleepiness,boredom and age
class pet {
  constructor(name,age,hunger,boredom,sleepiness){
    this.name=name
    this.age=age
    this.hunger=hunger
    this.boredom=boredom
    this.sleepiness=sleepiness
  }
  //create functions for age, eat,hunger,boredom to decrement
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

//Instantiate your Tamagotchi (If you created a class)
  const mametchi= new pet ("",0,1,1,1)
//add pet name
  function petName(){
  petName=document.getElementById("petname").value
  document.getElementById("petdes").innerText=`Hi! I am your pet ${petName}!`
  }
//add age
  function setAge(){
  setInterval(displayAge,10000)
  function displayAge(){
    if(mametchi.hunger>=10){
    document.getElementById("age").innerText="your pet has died from starving"
  }else{
    document.getElementById("age").innerText=mametchi.age++
  }
    }
  }
  document.querySelector("#submit").addEventListener("click",setAge)
// add Hunger display and event listener
  function setHunger(){
    setInterval(displayHunger,2000)
    function displayHunger(){
      if(mametchi.hunger>=10){
        document.getElementById("hunger").innerText="your pet has died from starving"
      }else{
        document.getElementById("hunger").innerText=mametchi.hunger++
      }
    }
  }
  document.querySelector("#submit").addEventListener("click",setHunger)
//add event listener to feed button
  document.getElementById("feed").addEventListener("click",(e)=>{
  mametchi.feed()
  document.getElementById("hunger").innerText=mametchi.hunger
  })
// add boredom display and event listener
  function setBoredom(){
    setInterval(displayBoredom,1500)
    function displayBoredom(){
      if(mametchi.boredom>=10){
        document.getElementById("boredom").innerText="your pet has died from boredom"
      }else{
        document.getElementById("boredom").innerText=mametchi.boredom++
      }
    }
  }
  document.querySelector("#submit").addEventListener("click",setBoredom)
//add event listener to play button
  document.getElementById("play").addEventListener("click",(e)=>{
    mametchi.play()
    document.getElementById("play").innerText=mametchi.boredom
  })
//add sleep display and event listener
function setSleep(){
  setInterval(displaySleep, 2500)
  function displaySleep(){
    if(mametchi.sleep>=10){
      document.getElementById("sleepiness").innerText="your pet has died from sleep deprivation"
    }else{
      document.getElementById("sleepiness").innerText=mametchi.sleepiness++
    }
  }
}
document.querySelector("#submit").addEventListener("click",setSleep)
//add event listeners to sleep button
// document.getElementById("sleep").addEventListener(click)



//
// Morph your pet at certain ages.
//
// Animate your pet across the screen while it's alive.-use key frame animation with css
// You must have a game object or class for your Tamagotchi,and event listeners/handlers that call methods in your game object or class.
