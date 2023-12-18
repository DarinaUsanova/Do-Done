const input = document.querySelector('input');
const button = document.querySelector('.add-button');
const ul = document.querySelector('ul');

function addTask() {
  if(input.value === '') {
    alert('Please enter something)!');
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = '';

    let starSpan = document.createElement('span');
    starSpan.innerHTML = '<i class="fa-solid fa-star"></i>';
    li.prepend(starSpan);
    let delSpan = document.createElement('span');
    delSpan.innerHTML = '<i class="fa-solid fa-eraser"></i>';
    li.append(delSpan);
  }
  saveData();
}

input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
})

ul.addEventListener('click', function(e) {
  if (e.target.closest('.fa-eraser')) {
    e.target.closest('li').remove();
    saveData();
  } else if (e.target.closest('li') || e.target.closest('.fa-star')) {
    e.target.closest('li').classList.toggle('checked');
    saveData();
  }
});

function saveData() {
  localStorage.setItem('data', ul.innerHTML);
}
function showData(){
  ul.innerHTML = localStorage.getItem('data');
}
showData();