const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  bins[trash]++;
}
return bins;
console.log(bins)