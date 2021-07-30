const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

//NOTE: when init [] array, better explicit set type
const initEmpty: string[] = [];
//NOTE: ts arrays inside array
const carsByMake: string[][] = [];

//NOTE: Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

//NOTE: Help with 'map'
carMakers.map(
  //NOTE: anonymos function here return string type, and argument type string
  (car: string): string => {
    return car.toUpperCase();
  }
);

//NOTE: Flexible multiple types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
