import run from "aocrunner";

const parseInput = (rawInput: string) => 
  rawInput.split('\n').map((moves) => moves.split(' '));

interface Strategy {
  [key: string]: Shape
}

interface Shape {
  move: string[],
  beats: string,
  score: number
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const strategy: Strategy = {
    'rock': {
      'move': ['A', 'X'],
      'beats': 'scissors',
      'score': 1
    },
    'paper': {
      'move': ['B', 'Y'],
      'beats': 'rock',
      'score': 2
    },
    'scissors': {
      'move': ['C', 'Z'],
      'beats': 'paper',
      'score': 3
    }
  }

  let score = 0;
  const winScore = 6;
  const drawScore = 3;
  const loseScore = 0;

  for(let round of input) {
    const opponent = round[0];
    const me = round[1];
    const opponentMove = Object.keys(strategy).find(move => strategy[move].move.includes(opponent));
    const myMove = Object.keys(strategy).find(move => strategy[move].move.includes(me));


    if(opponentMove != undefined && myMove != undefined) {
      if (strategy[opponentMove].beats === myMove) {
        score += (strategy[myMove].score + loseScore)
      } else if (strategy[opponentMove] === strategy[myMove]) {
       score += (strategy[myMove].score + drawScore) 
      } else if(strategy[myMove].beats === opponentMove) {
        score += (strategy[myMove].score + winScore)
      }
    }
  }

  return score;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const strategy: Strategy = {
    'rock': {
      'move': ['A'],
      'beats': 'scissors',
      'score': 1
    },
    'paper': {
      'move': ['B'],
      'beats': 'rock',
      'score': 2
    },
    'scissors': {
      'move': ['C'],
      'beats': 'paper',
      'score': 3
    }
  }

  let score = 0;
  const winScore = 6;
  const drawScore = 3;
  const loseScore = 0;

  for(let round of input) {
    const opponent = round[0];
    const me = round[1];
    const opponentMove = Object.keys(strategy).find(move => strategy[move].move.includes(opponent)) || '';
    const losingMove = strategy[opponentMove].beats;
    const winningMove = Object.keys(strategy).find(move => strategy[move].beats === opponentMove) || '';

    if (me === 'X') {
      score += (strategy[losingMove].score + loseScore)
    } else if (me === 'Y') {
      score += (strategy[opponentMove].score + drawScore) 
    } else if(me === 'Z') {
      score += (strategy[winningMove].score + winScore)
    }
  }

  

  return score;

};

const testData = `
A Y
B X
C Z
`;

run({
  part1: {
    tests: [
      {
        input: testData,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testData,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});