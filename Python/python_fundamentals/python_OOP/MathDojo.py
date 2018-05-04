class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, *add):
        for a in add:    
            if type(a) == list:
                for i in a:
                    self.result = self.result + i
            elif type(a) == int:
                self.result = self.result + a
        print(self.result)
        return self
    def subtract(self, *sub):
        for b in sub:    
            if type(b) == list:
                for y in b:
                    self.result = self.result - y
            elif type(b) == int:
                self.result = self.result - b 
        return self
md1 = MathDojo().add(2).add(2,5).subtract(3,2).result
md2 = MathDojo().add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result
print(md1)
print(md2)

