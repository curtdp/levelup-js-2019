export default {
  name: 'Persona',
  template: '<p>{{firstName}} {{lastName}}, также известный как {{alias}}</p>',
  data: function() {
    return {
      firstName: 'Уолтер',
      lastName: 'Уайт',
      alias: 'Гейзенберг',
    };
  },
};

export var a = 5;

export function changeA(newA) {
  a = newA;
}
