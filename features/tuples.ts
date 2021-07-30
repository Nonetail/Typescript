const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

//NOTE: tuple like array, but not very useful in ts
// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

//NOTE: object is more useful
const carStats = {
  horsepower: 400,
  weight: 3354
};
