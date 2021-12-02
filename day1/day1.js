const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input1.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  var first = null;
  var second = null;
  var third = null;
  var sum = null;
  var pastSum = 0;
  var counter = 0;

  for await (const line of rl) {

    third = second;
    second = first;
    first = Number(line);

    if(first != null && second != null && third != null)
    {
      pastSum = sum;
      sum = first+second+third;
    }

    if(pastSum != null && sum != null && pastSum < sum)
    {
      counter++;
    }



  }

  console.log(counter);
}

processLineByLine();