function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

EasyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send();
};
EasyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200 || self.http.status === 201) {
      console.log(self.http);
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };

  this.http.send(data);
};
