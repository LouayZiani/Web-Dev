x = str(input())
new_num = ''

for i in range(len(x)):
    new_num += x[len(x)-1-i]

print(int(new_num))