sugar = int(input())

bag = 0

while sugar >= 0:
    if sugar % 5 == 0:
        bag += sugar // 5
        break
    else:
        sugar -= 3
        bag += 1
        
print(bag if sugar >= 0 else -1)