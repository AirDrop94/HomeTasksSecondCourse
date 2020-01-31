/* eslint-disable no-console */
/* eslint-disable func-names */
function Methods(api, location) {
  this.xhr = new XMLHttpRequest();
  this.API = api;
  this.location = location;
}

Methods.prototype.getPosts = function () {
  this.xhr.open('GET', `${this.API}/${this.location}`);
  this.xhr.send();
  this.xhr.responseType = 'json';

  return new Promise(((resolve) => {
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        resolve(this.xhr.response);
      }
    };
  }));
};

Methods.prototype.addPost = function (data) {
  this.xhr.open('POST', `${this.API}/${this.location}`);
  this.xhr.setRequestHeader('Content-Type', 'application/json');
  this.xhr.send(JSON.stringify(data));

  return new Promise(((resolve) => {
    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        resolve(this.xhr.response);
      }
    };
  }));
};

Methods.prototype.deletePost = function (id) {
  this.xhr.open('DELETE', `${this.API}/${this.location}/${id}`);
  this.xhr.send();

  return new Promise(((resolve) => {
    this.xhr.onload = () => {
      resolve(this.xhr.response);
    };
  }));
};

Methods.prototype.editPost = function (id, data) {
  this.xhr.open('PUT', `${this.API}/${this.location}/${id}`);
  this.xhr.setRequestHeader('Content-Type', 'application/json');
  this.xhr.send(JSON.stringify(data));

  return new Promise(((resolve) => {
    this.xhr.onload = () => {
      resolve(this.xhr.response);
      console.log(resolve);
    };
  }));
};

Methods.prototype.getPost = function (id) {
  this.xhr.open('GET', `${this.API}/${this.location}/${id}`);
  this.xhr.responseType = 'json';

  this.xhr.send();

  return new Promise(((resolve) => {
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        resolve(this.xhr.response);
      }

      if (this.xhr.status === 404) {
        resolve(console.log('Not found error'));
      }
    };
  }));
};
