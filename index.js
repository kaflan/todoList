//Ваш код будет здесь
var task = {
  items: []
};
var data = localStorage.getItem('data');
if(data){
  task = JSON.parse(data);
}
task.items.sort();
window.addEventListener('load', function load(){
  var button = document.querySelector('button');
  var uList = document.querySelector('ul');
  var input = document.querySelector('input');
  var i;
  update();
  function update(){
    uList.innerHTML = '';
    for(i = 0; i < task.items.length; i++){
      var el = document.createElement('li');
      uList.appendChild(el);
      el.textContent = task.items[i];
      task.items.sort();
    }
  }
  var valid = function (){
   return input.value.trim();
  };
  var mark = function (){
    if (!valid()) return;
    var I = input.value;
    task.items.push(I);
    update();

    localStorage.setItem('data', JSON.stringify(task));
    input.value = '';
  };
  button.addEventListener('click', mark);
  input.addEventListener('keyup', function(e) {
    if (e.keyCode !== 13) return;
    mark();
  });
});