// eslint-disable-next-line rules
function observers() {
  // eslint-disable-next-line no-undef
  const rest = new Rest();
  // eslint-disable-next-line no-undef
  const ui = new UI();

  ui.allPost.addEventListener('click', (event) => {
    event.preventDefault();
    rest.getAllPosts()
      .then(ui.renderResponses);
  });

  ui.idPostButton.addEventListener('click', (event) => {
    event.preventDefault();
    rest.getPost(ui.inputIdToGet())
      .then(ui.renderResponse)
      .then(ui.clearInputIdToGet);
  });

  ui.addNewPost.addEventListener('click', (event) => {
    event.preventDefault();
    rest.sendNewPost(ui.inputData())
      .then(ui.clearInputData);
  });

  ui.btnDeletePost.addEventListener('click', (event) => {
    event.preventDefault();
    rest.deletePost(ui.inputIdToDel())
      .then(ui.clearInputIdToDel);
  });

  ui.btnEditPost.addEventListener('click', (event) => {
    event.preventDefault();
    rest.editPost(ui.inputIdToEdit(), ui.inputDataToEdit())
      .then(ui.clearInputDataToEdit);
  });
}

observers();
