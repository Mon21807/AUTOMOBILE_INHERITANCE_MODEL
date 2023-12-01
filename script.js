// Constructor function for the base Automobile
function Automobile(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Adding a method to the base Automobile
  Automobile.prototype.displayInfo = function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  };
  
  // Constructor function for the FourWheeler
  function FourWheeler(make, model, year, numOfDoors) {
    // Call the base class constructor using call()
    Automobile.call(this, make, model, year);
    this.numOfDoors = numOfDoors;
  }
  
  // Use Object.create() to set up the prototype chain
  FourWheeler.prototype = Object.create(Automobile.prototype);
  
  // Set the constructor property of FourWheeler to itself
  FourWheeler.prototype.constructor = FourWheeler;
  
  // Adding a method to the FourWheeler
  FourWheeler.prototype.openDoors = function() {
    console.log(`Opening ${this.numOfDoors} doors.`);
  };
  
  // Creating instances using constructor function
  const car1 = new FourWheeler('Tata', 'Nano', 2022, 4);
  const car2 = new FourWheeler('Toyota', 'Camry', 2023, 4);
  
  // Calling methods
  car1.displayInfo();
  car1.openDoors();
  
  car2.displayInfo();
  car2.openDoors();
  