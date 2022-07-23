$(document).ready(function () {
    $('#example').DataTable();
});

let wrapper = document.querySelector('.wrapper')
let menu = document.querySelector('#menu')
function add(){
  wrapper.classList.toggle('active')
}
function add_btn(){
  menu.classList.toggle('show')
  console.log('ishladi');
}