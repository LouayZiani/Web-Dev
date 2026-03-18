from models import Animal, Cat, Dog

def main():
    animal = Animal("Tigre", 5, "Orange")
    dog = Dog("Brutus", 2, "Golden", "Golden Retriever")
    cat = Cat("Tammy", 1.5, "Gray", "fishh")

    animals = [animal, dog, cat]

    for animal in animals:
        print(animal)
        print(animal.move())
        print(animal.speak()) # here we demonstrate polymorphism cuz speak method gives us diff results depending on the obj type
        print("\n")

    print(dog.fetch())
    print(cat.climb())

if __name__ == "__main__": # without this the file runs everytime its imported
    main()