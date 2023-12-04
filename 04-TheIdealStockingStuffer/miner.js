const crypto = require('crypto');

function mineAdventcoin(secretKey) {
    let number = 1;

    while (true) {
        // Concatenate the secret key with the current number
        const inputData = `${secretKey}${number}`;

        // Calculate the MD5 hash
        const hashMd5 = crypto.createHash('md5').update(inputData).digest('hex');

        // Check if the hash starts with at least five zeroes
        if (hashMd5.startsWith('000000')) {
            return number;
        }

        // Increment the number for the next iteration
        number += 1;
    }
}

// Puzzle input
const secretKey = 'yzbqklnj';
const result = mineAdventcoin(secretKey);

// Print the result
console.log(`The lowest number to mine AdventCoin is: ${result}`);

