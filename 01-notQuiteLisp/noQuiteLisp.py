def elevator(rute):
    
    with open('input.txt','r') as file:
        data = file.read()
        
        steps = list(data)
        floor = 0
        basementStep = 0
        baja = 0
         
        print("basementStep: ", steps)
        for i, step in enumerate(steps, start=1):
            if step == '(':
               floor += 1
            elif step == ')':
                floor -= 1
                
                if floor == -1 and basementStep == 0:
                    basementStep = i

    print("Total steps: ", len(steps))
    print("Final floor: ", floor)
    print("basementStep: ", basementStep)
    
    
rute_file = './input.txt'
elevator(rute_file)