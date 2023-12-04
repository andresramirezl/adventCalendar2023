def lector(rute):
    with open(rute, 'r') as file:
        directions = file.read()
        #print("len: ", directions)
        santa_x, santa_y = 0, 0
        robo_x, robo_y = 0, 0
        visited_houses = {(0, 0)}  # Starting house

        # Use a toggle variable to switch between Santa and Robo-Santa
        is_santa_turn = True

        for direction in directions:
            # Determine which Santa is moving
            current_x, current_y = (santa_x, santa_y) if is_santa_turn else (robo_x, robo_y)

            if direction == '^':
                current_y += 1
            elif direction == 'v':
                current_y -= 1
            elif direction == '>':
                current_x += 1
            elif direction == '<':
                current_x -= 1

            visited_houses.add((current_x, current_y))

            # Update the corresponding Santa's position
            if is_santa_turn:
                santa_x, santa_y = current_x, current_y
            else:
                robo_x, robo_y = current_x, current_y

            # Toggle the turn for the next move
            is_santa_turn = not is_santa_turn
        print("houses visited: ", len(visited_houses))
        

rute_file = 'input.txt'
lector(rute_file)

