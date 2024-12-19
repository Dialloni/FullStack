class Car:
    def __init__(self,make,model,weight,price,year):
        self.make = make
        self.model = model
        self.weight = weight
        self.price = price
        self.year = year

    def printcarInfo(self):
         print("Make: ",self.make)
         print("Model: ",self.model)
         print("Weight: ",self.weight)
         print("Price: ",self.price)
         print("Year: ",self.year)

car1 = Car ("Toyota","Corolla",1000,1000000,2019)
car1.printcarInfo()
