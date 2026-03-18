#find runner-up score


if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    
    maxim = arr[0]
    runner_up = 0
    
    for num in arr:
        maxim = max(num, maxim)
    for num in arr:
        if num > runner_up and num < maxim:
            runner_up = num
            
    print(runner_up)