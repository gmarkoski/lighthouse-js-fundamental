const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  let appropriate = [];
  
  for (const station of stations) {
    if ((station[1] >= 20) && (station[2] === 'school' || station[2] === 'community centre'))
      appropriate.push(station[0]);
  }
  return appropriate;
}
console.log(chooseStations(stations));

