public class Animal {
    int numberOfLegs;
    int height;
    int position;
    String greeting;
    int speed;
    String name;

    public Animal(){

    }

    // constructor method
    public Animal(int numberOfLegs, int height, int position, int speed) { // signature: access, parameters
        this.height = height;
        this.numberOfLegs = numberOfLegs;
        this.position = position;
        this.speed = speed;
        this.name = "C";
    }

    public void setGreeting(String greeting) {
        this.greeting = greeting;
    }

    public void walking() {
        this.position = this.position + this.speed;
    }



    public static void main(String[] args) {


//	    printMap(cat, dog);
//	    cat.walking();
//        printMap(cat, dog);
//        System.out.println("Cat: " + cat.position); // Cat: 100
//
//        dog.walking();
//        printMap(cat, dog);
//        System.out.println("Dog: " + dog.position); // Dog: 170
    }
}
