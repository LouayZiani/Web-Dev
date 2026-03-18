speed = int(input())
hours = int(input())

length = 109
# dist = speed * hours
# if speed > 0:
#     print(abs(dist - length))
# else:
#     print(abs(dist + length))

dist = (speed * hours) % length
print(dist)