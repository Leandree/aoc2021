const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('day2.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  var horizontal = 0;
  var aim = 0;
  var depth = 0;

  for await (const line of rl) {
      var splited = line.split(" ");
      switch(splited[0])
      {
        case "forward" :
            horizontal+=Number(splited[1]);
            if(aim != 0)
            {
                depth+=aim*Number(splited[1]);
            }
            break;

        case "down" : 
            aim+=Number(splited[1]);
            break;

        case "up" : 
            aim-=Number(splited[1]);
            break;
      }
  }

  console.log(horizontal * depth);
}

processLineByLine();