const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
let arr = []
rl.on('line', (line) => {
  console.log('line:' + line)
  const lineArr = line.split(' ')
  if (!line.includes('Q') && !line.includes('N')) {
    if (arr.length < 2) {
      arr.push(lineArr)
    } else {
      arr = [lineArr]
    }
  } else {
    if (arr.length === 2) {
      const [op, i, s] = lineArr
      const [[n, lens], scores] = arr
      switch(op) {
        case 'Q': {
          if (s > e) {
            let t = s;
            s = e;
            e = t;
          }
          console.log(Math.max(...arr[1].slice(s - 1, e)));
          break;
        }
        case 'U': {
          let i = op[1];
          let to = op[2];
          arr[1][i - 1] = to;
          break;
        }
        default: break;
      }
    }
 })

// 5 7
// 1 2 3 4 5
// Q 1 5
// U 3 6
// Q 3 4
// Q 4 5
// U 4 5
// U 2 9
// Q 1 5