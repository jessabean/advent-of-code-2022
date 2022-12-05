import fs from 'fs';

function loadData() {
  const data = fs.readFileSync('day1/day1.txt', 'utf8');

  return data;
}

function countTopN(n) {
  const input = loadData();
  const bags = input.split('\n\n');

  let sums = [];

  for(let bag of bags) {
    const snackz = bag.split('\n');
    let sum = 0;

    for(let snack of snackz) {
      sum += Number(snack);
    }

    sums.push(sum);
  }

  sums.sort();

  const mostCalories = sums.slice(0-n);
  let totalCalories = 0;

  for (let calories of mostCalories) {
    totalCalories += calories;
  }

  return totalCalories;
}

export default function day1() {
  console.log('part1', countTopN(1));
  console.log('part2', countTopN(3));
}