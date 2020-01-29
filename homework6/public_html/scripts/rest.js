function Rest(api, location) {
  this.xhr = new XMLHttpRequest();
  this.API = api;
  this.location = location;
}

Rest.prototype.getAllPosts = function () {
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

Rest.prototype.post = function (data) {
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

Rest.prototype.delete = function (id) {
  this.xhr.open('DELETE', `${this.API}/${this.location}/${id}`);
  this.xhr.send();

  return new Promise(((resolve) => {
    this.xhr.onload = () => {
      resolve(this.xhr.response);
    };
  }));
};

Rest.prototype.edit = function (id, data) {
  this.xhr.open('PUT', `${this.API}/${this.location}/${id}`);
  this.setRequestHeader('Content-Type', 'application/json');
  this.xhr.send(JSON.stringify(data));

  return new Promise(((resolve) => {
    this.xhr.onload = () => {
      resolve(this.xhr.response);
    };
  }));
};

Rest.prototype.getPost = function (id) {
  this.xhr.open('PUT', `${this.API}/${this.location}/${id}`);
  this.xhr.responseType = 'json';
  this.xhr.send();

  return new Promise(((resolve) => {
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        resolve(this.xhr.response);
      }
      if (this.xhr.status === 404){
        resolve(console.log('error 404'));
      }
    };
  }));
};
