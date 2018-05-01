def countdown(a):
    mylist = []
    for count in range(a,-1,-1):
        mylist.append(count)
    print(mylist)
countdown(5)
def printandreturn(a,b):
    print(a)
    return b
printandreturn(1,2)
def fpl(mylist):
    Sum = mylist[0] + len(mylist)
    print(Sum)
fpl([1,2,3,4,5])
def jinx(a,b):
    mylist = []
    for i in range(0,a):
        mylist.append(b)
    if(a == b):
        print("Jinx!") 
        return
    print(mylist)
jinx(3,3)