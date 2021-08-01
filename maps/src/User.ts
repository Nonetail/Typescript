//NOTE: GOOGLE: check out the faker library
//NOTE: some of the libraries need type definition files
import faker from 'faker';
import { Mappable } from './CustomMap';

//NOTE: convention in the ts world that it is not good to use default export
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    //NOTE: before specify the value of this.location, it's value is undefined, which means we can not do this.location.lat = someValue
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
