class bike:
    def __init__(self,price,max_speed,miles):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    def displayinfo(self):
        print(self.price, self.max_speed, self.miles)
        return self
    def ride(self):
        print("Riding")
        self.miles = self.miles + 10
        return self
    def reverse(self):
        print("Reversing")
        self.miles = self.miles - 5
        return self
FirstInstance = bike(1000,50,100).ride().ride().ride().reverse().displayinfo()
SecondInstance = bike(1000,50,100).ride().ride().reverse().reverse().displayinfo()
ThirdInstance = bike(1000,50,100).reverse().reverse().reverse().displayinfo()