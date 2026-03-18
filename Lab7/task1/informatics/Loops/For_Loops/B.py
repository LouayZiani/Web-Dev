a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(b+1):
    if i >= a and i % d == c:
        print(i)