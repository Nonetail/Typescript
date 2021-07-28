//NOTE: interface is to create a custom type 
//NOTE: captical case
//NOTE: to check example if an object satisfy an interface, as long as this object contains summary function, then it's fine, and it can contains additional more properties
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

//NOTE: we should try to create function typed with interfaces
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
