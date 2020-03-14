import returnHi from './utils.js';
// import helicopter, * as igorObj from './igor.js';
import { person as superPerson, car as superCar } from './igor.js';

console.log(returnHi(superCar.name));
console.log(returnHi(superPerson.name));
