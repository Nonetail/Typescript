//NOTE: an interface exxample which sorter can use
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }


//NOTE: GOOGLE: abstract class features
//NOTE: 1: can't be used to create an object directly
//NOTE: 2: only used as a parent class
//NOTE: 3: can contain real implementation for some methods
//NOTE: 4: the implemented methods can refer to other methods that don't actually exist yer ( we still have to provide names and types for the un-implemented methods)
//NOTE: 5: can make child classes promise to implement some other method
export abstract class Sorter {
  //NOTE: many cases like in interface or abstract: the leftIndex argument name and real function argument names don't have to be identical, but types should
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  //NOTE: GOOGLE: type guard for primitive value: typeof
  //NOTE: GOOGLE: type guard for every other value that is created with a constructor function, use instanceof 
  //NOTE: GOOGLE: even if type of for arrays and objects in js, but it's not working in ts
}
