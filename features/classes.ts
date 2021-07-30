class Vehicle {
  constructor(public color: string) { }
  //NOTE: GOOGLE: public modifier here applyed on properties is a short hand for code bottom
  //NOTE: proteced and private work on properties as well
  // color: string;
  // constructor(color: string) {
  // this.color = color;
  // }


  //NOTE: protected, private and default are from ts
  //NOTE: protected can only be called within this class or other methods in child classes
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  //GOOGLE: check js class extends and constructor
  //NOTE: we don't use `public` on color here since we don't wanna create a new instance of color, but to use prarent one
  constructor(public wheels: number, color: string) {
    super(color);
  }

  //NOTE: private can only be called within this class 
  //NOTE: the modifier in child and parent should be consistant
  //NOTE: private does not add in any security
  private drive(): void {
    console.log('vroom');
  }

  //NOTE: by default public, which means it can be called everywhere
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
