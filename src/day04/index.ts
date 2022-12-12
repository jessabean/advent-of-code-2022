import run from "aocrunner";

const parseInput = (rawInput: string) => 
  rawInput.split('\n').map(pair => pair.split(','));

const parseRange = (input: string, position: number) => {
  return Number(input.split('-')[position])
}

const containsArray = (pair1: string, pair2: string) => {
  console.log(pair1, pair2);
  const pair1Start = parseRange(pair1, 0);
  const pair2Start = parseRange(pair2, 0);
  const pair1End = parseRange(pair1, 1);
  const pair2End = parseRange(pair2, 1);

  const result = 
    (pair1Start >= pair2Start && pair1End <= pair2End) ||
      (pair2Start >= pair1Start && pair2End <= pair1End)

  return result;
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let containedPairs = 0;
  
  for(let row of input) {
    let contains = containsArray(row[0], row[1]);
    if(contains) {
      containedPairs += 1;
    }
  }
  
  return containedPairs;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const testData = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

run({
  part1: {
    tests: [
      {
        input: testData,
        expected: 2,
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
