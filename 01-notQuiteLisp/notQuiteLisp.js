const fs = require('fs')

function elevator(rute){
    fs.readFile(rute, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
    
        const steps = data.trim();
        let floor = 0
        let basementStep = 0
        
        for (let i = 0; i < steps.length; i++) {
            const step = steps[i]
                
            if (step === '(') {
                floor += 1;
            } else if (step === ')') {
                floor -= 1;
                
                if(floor === -1 && basementStep === 0){
                    basementStep = i + 1
                }
            } 
        }

        
        console.log("Totoal steps: ", steps.length)
        console.log("final floor: ", floor)
        console.log("basementStep: ", basementStep)
    });
}

/* PART 1 */
const filePath = './input.txt'
elevator(filePath)

/* PART 2 */





