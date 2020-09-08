function fOne() {
  console.log('one');
}

function fTwo(): void {
  console.log('two');
}

let fThree: Function;
// fThree = 3;
fThree = () => console.log('three');

const fFour: Function = (): void => {
  console.log('four');
};

const fFive: Function = (a: number, b: number): void => {
  console.log(a + b);
};

const fSix = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
};

const fSeven = (a: number, b: number, c: number = 10) => {
  console.log(a + b + c);
};
