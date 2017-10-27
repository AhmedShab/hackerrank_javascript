const fs = require('fs');

var input_stdin = process.argv[2];
var input_stdin_array = "";
var input_currentline = 0;


function readInput() {
  input_stdin_array = fs.readFileSync(input_stdin, 'utf8').toString().split('\n');
  main();
}

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

const lettersWeightMap = {
  a: { weight: 1 }, b: { weight: 2 }, c: { weight: 3 }, d: { weight: 4 }, e: { weight: 5 },
  f: { weight: 6 }, g: { weight: 7 }, h: { weight: 8 }, i: { weight: 9 }, j: { weight: 10 },
  k: { weight: 11 }, l: { weight: 12 }, m: { weight: 13 }, n: { weight: 14 }, o: { weight: 15 },
  p: { weight: 16 }, q: { weight: 17 }, r: { weight: 18 }, s: { weight: 19 }, t: { weight: 20 },
  u: { weight: 21 }, v: { weight: 22 }, w: { weight: 23 }, x: { weight: 24 }, y: { weight: 25 },
  z: { weight: 26 },
};

const getWeight = (s) => {
  let weightMap = [];

  let curr = 0;
  let prev = -1;
  while (curr < s.length -1) {
    if (prev > -1 && lettersWeightMap[s[curr]].weight === lettersWeightMap[s[prev]].weight) {
      weightMap.push(lettersWeightMap[s[curr]].weight + weightMap[prev]);
      prev = curr;
      curr++;
    }

    else {
      weightMap.push(lettersWeightMap[s[curr]].weight);
      prev = curr;
      curr++;
    }
  }

  return weightMap;
}

function main() {
  var s = readLine();
  console.log(s.length);
  var n = parseInt(readLine());
  const weights = getWeight(s);

  console.log(weights);

  for(var a0 = 0; a0 < n; a0++){
    var x = parseInt(readLine());
    // your code goes here
    weights.includes(x) ? console.log('Yes') : console.log('No');
  }
}

readInput();
