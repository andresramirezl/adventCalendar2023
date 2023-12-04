const fs = require('fs');

function lector(rute) {
    const data = fs.readFileSync(rute, 'utf8');
    const lines = data.split('\n');
    let totalArea = 0;

    for (const line of lines) {
        const dimension = line.split('x');
        const l = parseInt(dimension[0]);
        const w = parseInt(dimension[1]);
        const h = parseInt(dimension[2]);

        const sideFirst = l * w;
        const sideSecond = w * h;
        const sideThird = h * l;
        const minArea = Math.min(sideFirst, sideSecond, sideThird);
        const area = 2 * sideFirst + 2 * sideSecond + 2 * sideThird + minArea;
        totalArea += area;
        
        // Calcular la cantidad total de cinta necesaria
        const smallestPerimeter = 2 * Math.min(l + w, w + h, h + l);
        const ribbonForBow = l * w * h;
        const totalRibbonForPresent = smallestPerimeter + ribbonForBow;
        totalRibbon += totalRibbonForPresent;
        
        console.log("minArea:", minArea);
        console.log("Total Area:", totalArea);
        console.log("Total Ribbon:", totalRibbon);
    }

    console.log("Total Area:", totalArea);
}

const rute_file = 'input.txt';
lector(rute_file);
