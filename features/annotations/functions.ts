//NOTE: type inference for function only works with the return value, not the arguments
//NOTE: we should explicitly set return value type
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

//NOTE: void means return undefined
const logger = (message: string): void => {
  console.log(message);
};

//NOTE: rare case when throw will stop execution, which means this function will `never`  return;
const throwError = (message: string): never => {
  // if (!message) {
    throw new Error(message);
  // }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

//NOTE: destructuring with ts
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
