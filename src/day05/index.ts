import run from "aocrunner";

const parseInput = (rawInput: string) => 
  rawInput.split('\n\n');

const part1 = (rawInput: string) => {
  const [rawStacks, rawMoves] = rawInput.split('\n\n');
  const parsedStacks = rawStacks.split('\n')
  .map((line) =>
    [...line].filter((value, index) => index%4 ===1))
  const columns = parsedStacks.pop();
  const stacks: { [key: string]: any } = {};
  let topCrates = '';

  for(const row of parsedStacks) {
    for(let i = 0; i < row.length; i++) {
      if(row[i] !== ' ' && columns) {
        if(!stacks[columns[i]]) {
          stacks[columns[i]] = [];
        }

        stacks[columns[i]].unshift(row[i]);
      }
    }
  }

  const parsedMoves = rawMoves.split('\n')
    .map((move) => move.match(/\d+/g));

  for(const line of parsedMoves) {
    const num = Number(line![0]);
    const source = line![1];
    const destination = line![2];

    for(let i = 0; i < num; i++) {
      let crate = stacks[source].pop();

      if(!!crate) {
        stacks[destination].push(crate);
      }
    }
  }

  for(const stack of Object.values(stacks)) {
    topCrates += stack.pop()
  }

  return topCrates;
};

const part2 = (rawInput: string) => {
  const [rawStacks, rawMoves] = rawInput.split('\n\n');
  const parsedStacks = rawStacks.split('\n')
  .map((line) =>
    [...line].filter((value, index) => index%4 ===1))
  const columns = parsedStacks.pop();
  const stacks: { [key: string]: any } = {};
  let topCrates = '';

  for(const row of parsedStacks) {
    for(let i = 0; i < row.length; i++) {
      if(row[i] !== ' ' && columns) {
        if(!stacks[columns[i]]) {
          stacks[columns[i]] = [];
        }

        stacks[columns[i]].unshift(row[i]);
      }
    }
  }


  const parsedMoves = rawMoves.split('\n')
    .map((move) => move.match(/\d+/g));

  for(const line of parsedMoves) {
    const num = Number(line![0]);
    const source = line![1];
    const destination = line![2];

    let crates = stacks[source].splice(-num)

    if (!!crates) {
      stacks[destination].push(...crates);
    }
  }

  for(const stack of Object.values(stacks)) {
    topCrates += stack.pop()
  }

  return topCrates;
};

const testData = 
`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

run({
  part1: {
    tests: [
      {
        input: testData,
        expected: "CMZ",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testData,
        expected: "MCD",
      },
    ],
    solution: part2,
  },
  trimTestInputs: false,
  onlyTests: false,
});
