import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split('\n');

const priorityList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).map(string =>
    [string.substring(0, string.length / 2), string.substring(string.length / 2)]);
  let priorityScore = 0;

  for(let row of input) {
    let compartment1 = row[0];
    let compartment2 = row[1];

    for(let char of compartment1) {
      if(compartment2.includes(char)) {
        let charIndex = priorityList.indexOf(char);
        priorityScore += charIndex + 1;
        break;
      }
    }
  }

  return priorityScore;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const testData = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

run({
  part1: {
    tests: [
      {
        input: testData,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testData,
        expected: "",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
