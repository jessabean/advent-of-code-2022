import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const isUnique = (input: string) => {
  let initialLength = input.length;
  let char = input.split('');
  let set = new Set(char);

  return set.size === initialLength;
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let index = 0;

  for (let i = 0; i < input.length; i++) {
    const substring = input.substring(i, i+4);
    index = i+4;
    if (isUnique(substring)) {
      index = i+4;
      break;
    } else {
      continue;
    }
  }

  return index;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const testData = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

run({
  part1: {
    tests: [
      {
        input: testData,
        expected: 7,
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