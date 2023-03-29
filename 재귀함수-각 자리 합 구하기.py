N = list(input())
sum = 0

def sumofdigits():
    global sum
    if len(N) == 0:
        print(sum)
        return

    else:
        sum += int(N.pop(-1))
        sumofdigits()

sumofdigits()



























