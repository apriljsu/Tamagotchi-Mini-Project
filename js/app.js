//create variables to grab html element
const ageID=document.getElementById("age")
const hungerID=document.getElementById("hunger")
const submitID=document.getElementById("submit")
const boredomID=document.getElementById("boredom")
const sleepinessID=document.getElementById("sleepiness")

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
  setInterval(displayAge,5000)
  function displayAge(){
    if(mametchi.hunger>=10||mametchi.hunger<=0||mametchi.boredom>=10||mametchi.boredom<=0||mametchi.sleepiness>=10||mametchi.sleepiness<=0){
    ageID.innerText=""
  }else{
    ageID.innerText=mametchi.age++
    // Morph
    if(mametchi.age>0){
      document.getElementById("egg-image").src="pet older.gif"
    }
  }
    }
  }
  document.querySelector("#submit").addEventListener("click",setAge)

// add Hunger display and event listener
  function setHunger(){
    setInterval(displayHunger,2000)
    function displayHunger(){
      if(mametchi.hunger>=10){
        hungerID.innerText="your pet has died from starving"
      }else if(mametchi.hunger<=0){
        hungerID.innerText="your pet has died from overfeeding"
      }else if(mametchi.boredom>=10||mametchi.boredom<=0||mametchi.sleepiness>=10||mametchi.sleepiness<=0){
        hungerID.innerText=""
      }
      else{
        hungerID.innerText=mametchi.hunger++
      }
    }
  }
  submitID.addEventListener("click",setHunger)
//add event listener to feed button
  document.getElementById("feed").addEventListener("click",(e)=>{
  mametchi.feed()
  hungerID.innerText=mametchi.hunger
  })
// add boredom display and event listener
  function setBoredom(){
    setInterval(displayBoredom,1500)
    function displayBoredom(){
      if(mametchi.boredom>=10){
        boredomID.innerText="your pet has died from boredom"
      }else
      if(mametchi.boredom<=0){
        boredomID.innerText="your pet has died from too much play"
      }else
      if(mametchi.hunger>=10||mametchi.hunger<=0||mametchi.sleepiness>=10||mametchi.sleepiness<=0){
        boredomID.innerText=""
      }
      else{
        boredomID.innerText=mametchi.boredom++
      }
    }
  }
  submitID.addEventListener("click",setBoredom)
//add event listener to play button
  document.getElementById("play").addEventListener("click",(e)=>{
    mametchi.play()
    boredomID.innerText=mametchi.boredom
  })
//add sleep display and event listener
function setSleep(){
  setInterval(displaySleep, 2500)
  function displaySleep(){
    if(mametchi.sleepiness>=10){
      sleepinessID.innerText="your pet has died from sleep deprivation"
    }else
    if(mametchi.sleepiness<=0){
      sleepinessID.innerText="your pet has died from too much sleep"
    }else
    if(mametchi.hunger>=10||mametchi.hunger<=0||mametchi.boredom>=10||mametchi.boredom<=0){
      sleepinessID.innerText=""
    }
    else{
      sleepinessID.innerText=mametchi.sleepiness++
    }
  }
}
submitID.addEventListener("click",setSleep)
//add event listeners to sleep button
document.getElementById("sleep").addEventListener("click",(e)=>{
  mametchi.sleep()
  sleepinessID.innerText=mametchi.sleepiness
})



// Animate your pet across the screen while it's alive.-use key frame animation with css
// You must have a game object or class for your Tamagotchi,and event listeners/handlers that call methods in your game object or class.
