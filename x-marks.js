const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

function finalPosition(moves) {
  let x = 0;
  let y = 0;
  let position = []; 
  
  for (const move of moves) {  
    if (move === 'north') {
      y++;
    } else if (move === 'south') {
      y--;
    } else if (move === 'west') {
      x--;
    } else if (move === 'east') {
      x++;
    }
  }
  position.push(x, y);
  return position;
}
console.log(finalPosition(moves));
