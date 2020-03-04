const id = document.getElementById('id');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const age = document.getElementById('age');
const createBtn = document.getElementById('create');
const readBtn = document.getElementById('read');
const updateBtn = document.getElementById('update');
const deleteBtn = document.getElementById('del');
const dell = document.querySelector('.del');
const people = [];

createBtn.addEventListener('click', create);
readBtn.addEventListener('click', read);
updateBtn.addEventListener('click', update);
deleteBtn.addEventListener('click', del);

function create() {
  if (id.value === '' || firstName.value === '' || lastName.value === '' || age.value === '') {
    alert('Enter all data!');
  } else {
    let comparison = true;
    for (let j = 0; j < people.length; j++) {
      if (id.value === people[j].id.innerHTML) {
        comparison = false;
      }
    }

    if (comparison) {
      const newTable = document.createElement('div');
      newTable.className = 'newtable';
      dell.appendChild(newTable);

      const newId = document.createElement('div');
      newId.className = 'row-new-table';
      newId.innerHTML = document.getElementById('id').value;
      newTable.appendChild(newId);

      const newFirstName = document.createElement('div');
      newFirstName.className = 'row-new-table';
      newFirstName.innerHTML = document.getElementById('first-name').value;
      newTable.appendChild(newFirstName);

      const newLastName = document.createElement('div');
      newLastName.className = 'row-new-table';
      newLastName.innerHTML = document.getElementById('last-name').value;
      newTable.appendChild(newLastName);

      const newAge = document.createElement('div');
      newAge.className = 'row-new-table';
      newAge.innerHTML = document.getElementById('age').value;
      newTable.appendChild(newAge);

      const person = new Object();
      person.source = newTable;
      (person.id = newId),
        (person.firstName = newFirstName),
        (person.lastName = newLastName),
        (person.age = newAge);
      people.push(person);
      const key = id.value;
      localStorage.setItem(key, person.source.innerHTML);
    } else {
      alert('ID busy! Enter a new ID');
    }
  }
  clear();
}

function read() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    const newTable = document.createElement('div');
    newTable.className = 'newtable';
    newTable.innerHTML = localStorage.getItem(key);
    dell.appendChild(newTable);

    const person = new Object();
    person.source = newTable;
    person.id = key;
    person.firstName = key;
    person.lastName = key;
    person.age = key;
    people.push(person);
  }
  localStorage.clear();
}

function update() {
  if (id.value === '') {
    alert('Not found, enter ID!');
  } else {
    let equal = false;
    for (let i = 0; i < people.length; ++i) {
      if (id.value === people[i].id.innerHTML) {
        people[i].firstName.innerHTML = firstName.value;
        people[i].lastName.innerHTML = lastName.value;
        people[i].age.innerHTML = age.value;
        equal = true;
      } else if (id.value === people[i].id) {
        people[i].source.children[1].innerText = firstName.value;
        people[i].source.children[2].innerText = lastName.value;
        people[i].source.children[3].innerText = age.value;
        equal = true;
      }
    }
    if (!equal) {
      alert('Sorry, this ID not found!');
    }
  }
  clear();
}

function del() {
  if (id.value === '') {
    alert('Not found, enter ID!');
  } else {
    let equal = false;
    for (let i = 0; i < people.length; i++) {
      if (id.value === people[i].id.innerHTML) {
        dell.removeChild(people[i].source);
        equal = true;
      } else if (id.value === people[i].id) {
        dell.removeChild(people[i].source);
        equal = true;
      }
    }
    if (!equal) {
      alert('Sorry, this ID not found!');
    }
  }
  clear();
}

function clear() {
  (document.getElementById('id').value = ''), (document.getElementById('first-name').value = '');
  (document.getElementById('last-name').value = ''), (document.getElementById('age').value = '');
}

createBtn.addEventListener('click', create);
readBtn.addEventListener('click', read);
updateBtn.addEventListener('click', update);
deleteBtn.addEventListener('click', del);
