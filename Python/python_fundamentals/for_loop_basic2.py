def makeitbig(nums):
    for i in range(0,len(nums)):
        if nums[i] > 0:
            nums[i] = 'big'    
    print(nums)        
    return nums
makeitbig([1,2,3,-4,5])
def countpos(nums):
    count = 0
    for i in range(0,len(nums)):
        if nums[i]> 0:
            count = count + 1
            nums[-1] = count
    print(nums)
    return nums
countpos([-1,1,1,1])
def sumtotal(nums):
    total = sum(nums)
    print(total)
sumtotal([1,2,3,4,5])
def average(nums):
    total = sum(nums)
    avg = total/len(nums)
    print(avg)
average([10,20,30,40])
def length(nums):
    Long = len(nums)
    print(Long)
length([1,2,3,4,5])
def minimum(nums):
    min = nums[0]
    for i in range(1, len(nums)):
        if min > nums[i]:
            min = nums[i]
    print(min)
minimum([1,2,-3,4,5])
# alternatively
def minimum(nums):
    Min = min(nums)
    print(Min)
minimum([1,2,-3,4,5])
def maximum(nums):
    max = nums[0]
    for i in range(1, len(nums)):
        if max < nums[i]:
            max = nums[i]
    print(max)
maximum([1,2,-3,4,5])
# alternatively
def maximum(nums):
    Max = max(nums)
    print(Max)
maximum([1,2,-3,4,5])
def ultimateanalyze(nums):
    Max = nums[0]
    for i in range(1, len(nums)):
        if Max < nums[i]:
            Max = nums[i]
    Min = nums[0]
    for i in range(1, len(nums)):
        if Min > nums[i]:
            Min = nums[i]
    Sum = sum(nums)
    Avg = Sum/len(nums)
    Length = len(nums)
    print(Sum, Avg, Min, Max, Length)
ultimateanalyze([10,20,30,40,50])
# alternatively
def ultimateanalyze(nums):
    Max = max(nums)
    Min = min(nums)
    Sum = sum(nums)
    Avg = sum(nums)/len(nums)
    Length = len(nums)
    print(Sum, Avg, Min, Max, Length)
ultimateanalyze([10,20,30,40,50])
def reverselist(nums):
    length = len(nums)
    s = length
    for i in range(0, len(nums)):
        s = s - 1
        nums[s] = nums
    print(nums)
reverselist([1,2,3,4,5])
# alternatively
def reverselist(nums):
    list.reverse(nums)
    print(nums)
reverselist([1,2,3,4,5])