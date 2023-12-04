def lector(rute):
    
    with open(rute,'r') as file:
        data = file.read()
        lines = data.splitlines()
        totalArea = 0
        total_ribbon = 0
        
        for line in lines:
            dimension = line.split('x')
            l = int(dimension[0])
            w = int(dimension[1])
            h = int(dimension[2])

            sideFirst  = l*w
            sideSecond = w*h
            sideThird  = h*l 
            minArea    = min(sideFirst,sideSecond,sideThird) 
            
            area = 2*sideFirst+2*sideSecond+2*sideThird + minArea
            totalArea = totalArea + area
            
            smallest_perimeter = 2 * min(l + w, w + h, h + l)
            ribbon_for_bow = l * w * h
            total_ribbon_for_present = smallest_perimeter + ribbon_for_bow
            total_ribbon += total_ribbon_for_present
            
            print("minArea: ", minArea)
            print("Total Area: ", totalArea)
            print("Total Ribbon:", total_ribbon)
            

    print("Total Area: ", totalArea)
    
    
rute_file = 'input.txt'
lector(rute_file)