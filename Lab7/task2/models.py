class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return f"{self.name} is speaking"
    
    def move(self):
        return f"{self.name} is moving"
    
    def __str__(self):
        return f"{self.name} is a {self.age} year-old animal with {self.color} color"
    

class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self): #overrides speak() from base class
        return f"{self.name} barks"
    
    def fetch(self):
        return f"{self.name} is fetching the ball"
    
    def __str__(self):
        return f"{self.name} is a {self.age} year-old {self.breed} with {self.color} color"
    

class Cat(Animal):
    def __init__(self, name, age, color, favorite_food):
        super().__init__(name, age, color)
        self.favorite_food = favorite_food

    def speak(self):
        return f"{self.name} meows"
    
    def climb(self):
        return f"{self.name} is climbing the tree"
    
    def __str__(self):
        return f"{self.name} is a {self.age} year-old {self.color} cat. Its favorite food is {self.favorite_food}"
    
    