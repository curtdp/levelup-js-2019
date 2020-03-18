import pikaday from "pikaday";
import "./node_modules/pikaday/css/pikaday.css";
import { uk_UA, dateFormatString } from "./config.js";
import { parse, format, formatDistance, formatDistanceToNow } from "date-fns";
import { uk } from "date-fns/locale";

import { beginEl, endEl, distanceEl, howLongEl } from "./elements.js";

let howLong = new pikaday({
  i18n: uk_UA,
  firstDay: 1,
  field: document.getElementById("howLong"),
  parse: function(dateString, formatString) {
    // console.log("DateString ", dateString);
    return parse(dateString, formatString);
  },
  format: dateFormatString,
  toString: function(date, formatString) {
    return format(date, formatString);
  },
  onSelect: function(date) {
    updateHowLong();
  }
});

function updateHowLong() {
  howLongEl.textContent = `До ${format(howLong.getDate(), "dd MMMM", {
    locale: uk
  })} чекати залишилось ${formatDistanceToNow(howLong.getDate(), {
    locale: uk
  })}`;
}

let vacationBegin = new pikaday({
  i18n: uk_UA,
  firstDay: 1,
  field: beginEl,
  parse: function(dateString, formatString) {
    // console.log("DateString ", dateString);
    return parse(dateString, formatString);
  },
  format: dateFormatString,
  toString: function(date, formatString) {
    return format(date, formatString);
  },
  onSelect: function(date) {
    updateDistance();
  }
});

let vacationEnd = new pikaday({
  i18n: uk_UA,
  firstDay: 1,
  field: endEl,
  parse: function(dateString, formatString) {
    // console.log("DateString ", dateString);
    return parse(dateString, formatString);
  },
  format: dateFormatString,
  toString: function(date, formatString) {
    return format(date, formatString);
  },
  onSelect: function(date) {
    updateDistance();
  }
});

function updateDistance() {
  console.log(vacationBegin.getDate(), vacationEnd.getDate());
  if (vacationBegin.getDate() && vacationEnd.getDate()) {
    distanceEl.textContent = `тривалість відпустки ${formatDistance(
      vacationBegin.getDate(),
      vacationEnd.getDate(),
      {
        locale: uk
      }
    )}`;
  }
}
