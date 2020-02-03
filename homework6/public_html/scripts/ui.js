// eslint-disable-next-line rules
function UI() {
  this.allPost = document.getElementById('allPost');
  this.idPostButton = document.getElementById('postLoadById');
  this.addNewPost = document.getElementById('addNewPost');
  this.btnDeletePost = document.getElementById('deletePostByIdButton');
  this.btnEditPost = document.getElementById('editPostByIdButton');
  this.postContainer = document.getElementById('postContainer');
  this.titlePost = document.getElementById('titlePost');
  this.authorPost = document.getElementById('authorPost');
  this.textPost = document.getElementById('textPost');
  this.editPost = document.getElementById('postTitleToEdit');
  this.editAuthorPost = document.getElementById('postAuthorToEdit');
  this.editTextPost = document.getElementById('postTextToEdit');
  this.postIdToGet = document.getElementById('postIdToGet');
  this.postIdToDel = document.getElementById('postIdToDel');
  this.postIdToEdit = document.getElementById('postIdToEdit');
}

UI.prototype.inputIdToGet = function () {
  return this.postIdToGet.value;
};

UI.prototype.inputIdToDel = function () {
  return this.postIdToDel.value;
};

UI.prototype.inputIdToEdit = function () {
  return this.postIdToEdit.value;
};

UI.prototype.clearInputIdToGet = function () {
  this.postIdToGet.value = '';
};

UI.prototype.clearInputIdToDel = function () {
  this.postIdToDel.value = '';
};

UI.prototype.inputData = function () {
  return {
    title: this.titlePost.value,
    author: this.authorPost.value,
    text: this.textPost.value,
  };
};

UI.prototype.inputDataToEdit = function () {
  return {
    title: this.editPost.value,
    author: this.editAuthorPost.value,
    text: this.editTextPost.value,
  };
};

UI.prototype.clearInputData = function () {
  this.titlePost.value = '';
  this.authorPost.value = '';
  this.textPost.value = '';
};

UI.prototype.clearInputDataToEdit = function () {
  this.postIdToEdit.value = '';
  this.editPost.value = '';
  this.editAuthorPost.value = '';
  this.editTextPost.value = '';
};

UI.prototype.renderResponses = function (res) {
  res.forEach(((post) => {
    const div = document.createElement('div');
    div.innerHTML = `<div class="row" id="${post.id}">
        <h4 class="col-12 mt-5 mb-3">${post.title}</h4>
        <h5 class="mb-3 font-italic col-12">${post.author}</h5>
        <p class="col-12">${post.text}</p>
        <p class="col-12" style="border-bottom: 2px solid black">Id - ${post.id}</p>
      </div>`;
    this.postContainer.append(div);
  }));
};

UI.prototype.renderResponse = function (post) {
  const div = document.createElement('div');
  div.innerHTML = `<div class="row" id="${post.id}">
        <h4 class="col-12 mt-5 mb-3">${post.title}</h4>
        <h5 class="mb-3 font-italic col-12">${post.author}</h5>
        <p class="col-12">${post.text}</p>
        <p class="col-12" style="border-bottom: 2px solid black">Id - ${post.id}</p>
      </div>`;
  this.postContainer.append(div);
};
