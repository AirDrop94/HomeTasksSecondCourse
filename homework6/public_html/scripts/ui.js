/* eslint-disable no-alert */
/* eslint-disable func-names */
function UI() {
  this.content = document.querySelector('#content');
  this.title = document.getElementById('title');
  this.author = document.getElementById('author');
  this.descr = document.getElementById('descr');
  this.image = document.getElementById('image');
  this.dtnChange = document.getElementById('btn_change');
  this.btnAdd = document.getElementById('btn_add');
}

UI.prototype.alertMsg = function () {
  alert('Пожалуйста заполните все поля!');
};

UI.prototype.returnedObj = function (t, a, d, i = '') {
  return {
    title: t,
    author: a,
    descr: d,
    img: i,
  };
};

UI.prototype.dataUi = function () {
  const title = this.title.value;
  const author = this.author.value;
  const descr = this.descr.value;
  const img = this.image;

  if (title && author && descr) {
    return new Promise((resolve) => {
      if (img.files[0]) {
        const FR = new FileReader();
        FR.addEventListener('load', (event) => {
          const b64 = event.target.result;
          resolve(this.returnedObj(title, author, descr, b64));
        });
        FR.readAsDataURL(img.files[0]);
        return true;
      }
      if (!img.files[0] && !img.defaultValue) {
        resolve(this.returnedObj(title, author, descr));
        return true;
      }
      resolve(this.returnedObj(title, author, descr, img.defaultValue));
      return true;
    });
  }
  this.alertMsg();
  return false;
};

UI.prototype.inputVal = function (t = '', a = '', d = '', i = '') {
  this.title.value = t;
  this.author.value = a;
  this.descr.value = d;
  this.image.defaultValue = i;
  this.image.value = '';
};

UI.prototype.renderResponse = function (res) {
  this.content.innerHTML = '';
  res.forEach((el) => {
    if (el.img === '') {
      el.img = './img/no-photo.png';
    }
    const div = document.createElement('div');
    const template = `<div id="${el.id}" class="card mb-3" style="max-width: auto;">
      <div class="row no-gutters min-h">
        <div class="col-md-2 pos-rel">
          <img src="${el.img}" class="img pos-abs_c" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">${el.title}</h4>
            <h5>${el.author}</h5>
            <p class="card-text">${el.descr}</p>
            <button id="btn-mod" type="button" class="btn btn-secondary btn-sm">Изменить</button>
            <button id="btn-del" type="button" class="btn btn-danger btn-sm">Удалить</button>
          </div>
        </div>
      </div>
    </div>`;
    div.innerHTML = template;
    this.content.append(div);
  });
};
