function* numbers() {
  yield;
}

// same as above, both are generators
function *numbers2() {

}

const gen = numbers();
gen.next();
gen.next();

//console.log(numbers());
