const fs = require('fs');

function lector(rute) {
    const directions = fs.readFileSync(rute, 'utf-8');
    let santa_x = 0, santa_y = 0;
    let robo_x = 0, robo_y = 0;
    const visitedHouses = new Set(['0,0']);  // Starting house

    // Use a toggle variable to switch between Santa and Robo-Santa
    let isSantaTurn = true;

    for (const direction of directions) {
        // Determine which Santa is moving
        let currentX, currentY;
        if (isSantaTurn) {
            currentX = santa_x;
            currentY = santa_y;
        } else {
            currentX = robo_x;
            currentY = robo_y;
        }

        switch (direction) {
            case '^':
                currentY++;
                break;
            case 'v':
                currentY--;
                break;
            case '>':
                currentX++;
                break;
            case '<':
                currentX--;
                break;
        }

        visitedHouses.add(`${currentX},${currentY}`);

        // Update the corresponding Santa's position
        if (isSantaTurn) {
            santa_x = currentX;
            santa_y = currentY;
        } else {
            robo_x = currentX;
            robo_y = currentY;
        }

        // Toggle the turn for the next move
        isSantaTurn = !isSantaTurn;
    }

    console.log("Houses visited:", visitedHouses.size);
}

const ruteFile = 'input.txt';
lector(ruteFile);
