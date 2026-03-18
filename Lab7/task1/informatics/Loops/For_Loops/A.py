a = int(input())
b = int(input())

for i in range(b + 1):
    if i >= a and i % 2 == 0:
        print(f"{i} ", end='')