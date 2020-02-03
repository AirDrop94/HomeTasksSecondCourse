function Rest() {
  this.api = 'http://localhost:3006';
  this.xhr = new XMLHttpRequest();
}

Rest.prototype.getAllPosts = function () {
  this.xhr.open('GET', `${this.api}/posts`);
  this.xhr.send();

  this.xhr.responseType = 'json';

  return new Promise((resolve, reject) => {
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        resolve(this.xhr.response);
      }
      if (this.xhr.status === 404) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('404 Not found');
      }
    };
  });
};

Rest.prototype.getPost = function (id) {
  this.xhr.open('GET', `${this.api}/posts/${id}`);
  this.xhr.send();

  this.xhr.responseType = 'json';

  return new Promise((resolve, reject) => {
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        resolve(this.xhr.response);
      }
      if (this.xhr.status === 404) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('404 Not found');
      }
    };
  });
};

Rest.prototype.sendNewPost = function (data) {
  this.xhr.open('POST', `${this.api}/posts`);
  this.xhr.setRequestHeader('Content-Type', 'application/json');
  this.xhr.send(JSON.stringify(data));

  return new Promise((resolve) => {
    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        resolve(this.xhr.response);
      }
      return false;
    };
  });
};

Rest.prototype.deletePost = function (id) {
  this.xhr.open('DELETE', `${this.api}/posts/${id}`);
  this.xhr.send();

  return new Promise((resolve) => {
    this.xhr.onload = () => resolve(this.xhr.response);
  });
};

Rest.prototype.editPost = function (id, data) {
  this.xhr.open('PUT', `${this.api}/posts/${id}`);
  this.xhr.setRequestHeader('Content-Type', 'application/json');
  this.xhr.send(JSON.stringify(data));

  return new Promise((resolve) => {
    this.xhr.onload = () => resolve(this.xhr.response);
  });
};
