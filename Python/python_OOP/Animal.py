class Animal:
    def __init__(self,name,health):
        self.name = name
        self.health = health
    def walking(self):
        print("Walking: -1 health")
        self.health = self.health - 1 
        return self
    def running(self):
        self.health = self.health - 5
        print("Running: -5 health")
        return self
    def displayhealth(self):
        print("Health:",self.health)
        return self
FirstInstance = Animal("Human",50).walking().walking().walking().running().displayhealth()
class Dog(Animal):
    def __init__(self):
        self.name = Dog
        self.health = 150
    def petting(self):
        self.health = self.health + 5
        print("Petting")
        print("Doggy LOVES IT! Health + 5")
        return self
DoggyInstance = Dog().walking().walking().walking().running().running().petting().displayhealth()
class Dragon(Animal):
    def __init__(self):
        self.name = Dragon
        self.health = 170
    def flying(self):
        self.health = self.health + 10
        print("flying")
        print("Dragon is flying, SO REFRESHING Health + 10")
        return self
    def displayhealth(self):
        print("Health:",self.health, "I am a Dragon")
        return self
DragonInstance = Dragon().walking().walking().walking().running().running().flying().displayhealth()