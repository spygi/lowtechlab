public class FindTheCat {
    public static void printMap(Animal animal, Animal animal2) {
        for (int i = 0; i < 100; i++) {
            if (animal.position == i) {
                System.out.print(animal.name);
                continue;
            } else if (animal2.position == i) {
                System.out.print(animal2.name);
                continue;
            }
            System.out.print(".");
        }
        System.out.println();
    }

    public static int findTheCat(Animal... animals){
        int counter = 0;
        while (true) {
            if (animals[1].position < animals[0].position) {
                animals[1].walking();
                animals[0].walking();
                FindTheCat.printMap(animals[0], animals[1]);
                counter += 1; // counter = counter + 1;
            } else {
                break;
            }
        }

        return counter;
    }

    public static int findTheCat2(Animal... animals){
        int counter = 0;
        while (animals[1].position < animals[0].position) { // TODO
            animals[1].walking();
            animals[0].walking();
            FindTheCat.printMap(animals[0], animals[1]);
            counter += 1; // counter = counter + 1;
        }

        return counter;
    }

    public static void main(String[] args) {
        Animal cat = new Animal(4, 27, 25, 5);
        cat.setGreeting("miaw");
        Dog dog = new Dog(45, 4, 0);
        dog.setGreeting("ghow");
        System.out.println(FindTheCat.findTheCat2(cat, dog));
    }
}
