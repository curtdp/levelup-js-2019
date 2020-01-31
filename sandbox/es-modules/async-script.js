import {appendDiv} from './append-div.js';
import * as d3 from 'https://unpkg.com/d3?module';

function go() {
  appendDiv('Hello from async script');
}

export {go}
