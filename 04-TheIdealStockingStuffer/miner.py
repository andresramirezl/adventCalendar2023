import hashlib

def mine_adventcoin(secret_key):
    number = 1

    while True:
        # Concatenate the secret key with the current number
        input_data = f"{secret_key}{number}"

        # Calculate the MD5 hash
        hash_md5 = hashlib.md5(input_data.encode()).hexdigest()

        # Check if the hash starts with at least five zeroes
        if hash_md5.startswith('000000'):
            return number

        # Increment the number for the next iteration
        number += 1

# Puzzle input
secret_key = "yzbqklnj"
result = mine_adventcoin(secret_key)
# Print the result
print(f"The lowest number to mine AdventCoin is: {result}")
