class car:
    def __init__(self,price,speed,fuel,mileage):
        self.price = price 
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
    def display_all(self):
        print("Price:",self.price)
        print("Speed:",self.speed, "mph")
        print("Fuel:",self.fuel)
        print("Mileage:",self.mileage,"mpg")
        if self.price > 100000:
            print("Tax: 0.15")
        else:
            print("Tax: 0.12")
        return self
FirstInstance = car(2000,35,"Full",15).display_all()
SecondInstance = car(2000,5,"Not Full",105).display_all()
ThirdInstance = car(2000,15,"Kind of Full",95).display_all()
FourthInstance = car(2000,25,"Full",25).display_all()
FifthInstance = car(2000,45,"Empty",25).display_all()
SixthInstance = car(20000000,35,"Empty",15).display_all()