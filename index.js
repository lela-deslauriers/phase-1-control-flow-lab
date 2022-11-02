function scuberGreetingForFeet(feet) {
  let message; // Call variable
  if (feet <= 400) {
    return 'This one is on me!';
  }
  else if (feet <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  let cityMessage;
  cityMessage = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return cityMessage;
}

function switchOnCharmFromTip(tip){
  console.log(tip);
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }

}