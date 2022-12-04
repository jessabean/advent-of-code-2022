import fs from 'fs';

function loadData() {
  const data = fs.readFileSync('day1/day1.txt', 'utf8');

  return data;
}

function part1() {
  const input = loadData();
  const bags = input.split('\n\n');

  let max = -1;

  for(let bag of bags) {
    const snackz = bag.split('\n');
    let sum = 0;

    for(let snack of snackz) {
      sum += Number(snack);
    }

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

export default function day1() {
  console.log(part1());
}