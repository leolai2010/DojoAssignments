for basic in range(0,151):
    print(basic)
for i in range(5,1000001):
    if i%5==0:
        print(i)
for way in range(1,101):
    print(way)
    if way%5==0:
        print("Coding")
    if way%5==0 and way%10==0:
        print("Dojo")
total = 0
for sumof in range(0,500000):
    if sumof%2==1:
        total += sumof
print(total)
for countdown in range(2018,0,-4):
    print(countdown)
my_list = [2,9,3]
lowNum = my_list[0]
highNum = my_list[1]
mult = my_list[2]
for flexcountdown in range(highNum,lowNum,-mult):
    print(flexcountdown)