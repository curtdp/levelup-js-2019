import { difference } from 'lodash-es';

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = [7, 8, 9, 0, 11, 12, 13, 14, 15];

console.log(difference(a, b));

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
