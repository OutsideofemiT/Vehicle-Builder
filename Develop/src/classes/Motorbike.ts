// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ){
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    
    if (wheels.length !==2) {
      this.wheels = [new Wheel(), new Wheel()]
    } else {
      this.wheels = wheels;
    }

  }

wheelie(): void { 
  console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`); }

  override printDetails(): void {
    super.printDetails();

    console.log(`Vin: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    for (let i=0; i <this.wheels.length; i++) {
      console.log(
        `Wheel ${i + 1}: ${this.wheels[i].getDiameter} inch with a ${this.wheels[i].getTireBrand} tire`
      );
    }
    }
  }

  export default Motorbike;