function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride<=400){
    ride = "This one is on me!";
  }
  else if(400<ride && ride<2000){
    ride = 'That will be twenty bucks.';
  }
  else if(2000<ride && ride<2500){
    ride = 'I will gladly take your thirty bucks.';
  }
  else if(ride>2500){
    ride = 'No can do.';
  }
  return ride;

}

function ternaryCheckCity(city){
  // Write your code here!
  if(city==='NYC'){
    return "Ok, sounds good.";
  }
  else{
    return "No go.";
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip==='generous'){
    return "Thank you so much.";
  }
  else if(tip==='not as generous'){
    return "Thank you.";

  }
  else{
    return "Bye.";
  }
}