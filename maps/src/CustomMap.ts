// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}


//NOTE: add a new CustomMap class and only expose part of google map api functionality, which can be safe since other devs won't be able to access to everything from google map and accidentaly break anything
export class CustomMap {
  //NOTE: in ts, we can use created class as function construtor to create instances, can also use it to refer to an class type
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  //NOTE: addMarker(mappable: User | Company): void { user or company here will 
  //NOTE: TypeScript will only allow you to do things with the union if that thing is valid for every member of the union. 
  //NOTE: GOOGLE: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
