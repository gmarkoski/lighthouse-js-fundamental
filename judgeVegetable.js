const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

function judgeVegetable(vegetables, metric) {
  vegetables.sort(function (a, b) {
    return a[metric] - b[metric];
  });
  return vegetables[vegetables.length - 1].submitter;
}  
console.log(vegetables.submitter)
