//NOTE: ts can infer type 
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

//NOTE: nested destructuring ts
//NOTE: Usually, Typescript figure out the type of 'name' and 'age' for your using type inference.  The only reason I'm showing you this syntax here is because there are a handful of corner cases where it will be needed.
const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
