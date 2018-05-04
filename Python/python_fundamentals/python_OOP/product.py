class product: 
    def __init__(self,price,itemname,weight,brand,status):
        self.price = price
        self.itemname = itemname
        self.weight = weight
        self.brand = brand
        self.status = status
    def displayinfo(self):
        print("Item:", self.itemname)
        print("Price:", self.price)
        print("Brand:", self.brand)
        print("Weight:", self.weight)
        print("Status:", self.status)
        return self
    def sell(self):
        self.status = "sold"
        return self
    def addtax(self,tax):
        taxp = self.price * tax
        self.price = taxp + self.price 
        print("Tax added")
        return self
    def returnproduct(self,reason_for_return):
        if reason_for_return == "defective":
            self.status = "Defective"
            self.price = 0
        elif reason_for_return == "returned in the box":
            self.status = "Like New: For Sale"
        elif reason_for_return == "box has been opened":
            self.status = "Open Box"
            self.price = self.price * 0.8
        return self 
FirstProduct = product(200,"iPod","20kg","Apple","For Sale").addtax(1.5).returnproduct("box has been opened").displayinfo()