function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}
const gen = colors();
gen.next(); // {value: "red", done: false}
gen.next(); // {value: "blue", done: false}
gen.next(); // {value: "green", done: false}

const myColors [];
for (let color of colors()) {
  myColors.push(color);
}
myColors; // ['red', 'green', blue]
