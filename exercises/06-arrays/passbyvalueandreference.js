function turnOn(machine) {
  machine = {
    isOn: true
  };
}

var computer = {
  isOn: false
};

console.log(computer.isOn); // false;

turnOn(computer);

computer; //?

function turnOn(machine) {
  machine.isOn = true;
}

var computer = {
  isOn: false
};

turnOn(computer);
console.log(computer.isOn); // true;
