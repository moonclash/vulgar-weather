export  function celsiusConverter(temp) {
  return Math.floor(temp - 273.15);
}

export  function classRenderer(temp) {
  temp = celsiusConverter(temp);
  if(temp >= 25) {
    return 'hot';
  }
  if(temp < 22 && temp >= 10 ) {
    return 'normal';
  }
  if(temp < 10) {
    return 'cold';
  }
}

export function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
