S = input()

count = 0

alpa = {}
for i in range(97, 123):
    alpa[chr(i)] = -1

for i in S:
    if alpa[i] == -1:
        alpa[i] = count
    count += 1

result = list(alpa.values())

for i in result:
    print(i, end=' ')
