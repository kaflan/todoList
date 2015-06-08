var task = {
  items: []
};
var data = localStorage.getItem('data');
if (data) {
  task = JSON.parse(data);
}
task.items.sort();
window.addEventListener('load', function load() {
  'use strict';
  var button = document.querySelector('button');
  var uList = document.querySelector('ul');
  var input = document.querySelector('input');
  var i;
  var el;
  var I;

  function update() {
    uList.innerHTML = '';
    task.items.sort();
    for (i = 0; i < task.items.length; i++) {
      el = document.createElement('li');
      uList.appendChild(el);
      el.textContent = task.items[i];
    }
  }

  update();
  function valid() {
    return input.value.trim();
  }

  function mark() {
    if (!valid()) return;
    I = input.value;
    task.items.push(I);
    update();
    localStorage.setItem('data', JSON.stringify(task));
    input.value = '';
  }

  button.addEventListener('click', mark);
  input.addEventListener('keyup', function keyUpValid(e) {
    if (e.keyCode !== 13) return;
    mark();
  });
});