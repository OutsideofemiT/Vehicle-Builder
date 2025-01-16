// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class should extend the Vehicle class and implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  towingCapacity: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[]
  ) {
    super(); 

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  tow(vehicle: Truck | Motorbike | Car): void {
  let make = 'Unknown Make';
  let model = 'Unknown Model';

  if (vehicle instanceof Truck || vehicle instanceof Car || vehicle instanceof Motorbike) {
    make = vehicle.make;
    model = vehicle.model;
  }

  if ('weight' in vehicle && vehicle.weight <= this.towingCapacity) {
    console.log(`The ${make} ${model} is being towed.`);
  } else { 
    console.log(`The ${make} ${model} is too heavy to be towed.`);
  }
}



  override printDetails(): void {
    super.printDetails();

    console.log(`Vin: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);

    for (let i = 0; i < this.wheels.length; i++) {
      console.log(
        `Wheel ${i + 1}: ${this.wheels[i].getDiameter} inch with a ${this.wheels[i].getTireBrand} tire`
      );
    }
  }
}

// Export the Truck class as the default export
export default Truck;
