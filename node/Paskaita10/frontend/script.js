 // Funkcija, kuri išvalo vartotojų sąrašą ir atnaujina jį naujais duomenimis
 function refreshUserList(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} ${user.surname} - ${user.email}`;
      userList.appendChild(listItem);
    });
  }

  // Funkcija, kuri išsiunčia užklausą serveriui gauti vartotojų sąrašą ir jį atnaujina
  function getUsers(order) {
    fetch(`/users/${order}`)
      .then(response => response.json())
      .then(users => refreshUserList(users))
      .catch(error => console.error('Error fetching users:', error));
  }

  // Funkcija, kuri išsiunčia užklausą serveriui sukurti naują narį
  function createMembership(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    fetch('/memberships', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => response.json())
    .then(user => {
      console.log('Membership created:', user);
      form.reset();
      getUsers('asc'); // atnaujinti vartotojų sąrašą
    })
    .catch(error => console.error('Error creating membership:', error));
  }

  // Funkcija, kuri išsiunčia užklausą serveriui pašalinti narį pagal ID
  function deleteMembership(id) {
    fetch(`/memberships/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        console.log('Membership deleted');
        getUsers('asc'); // atnaujinti vartotojų sąrašą
      } else {
        console.error('Failed to delete membership');
      }
    })
    .catch(error => console.error('Error deleting membership:', error));
  }

  // Funkcija, kuri išsiunčia užklausą serveriui gauti vartotojų sąrašą surūšiuotą pagal tvarką
  function sortUsers(order) {
    getUsers(order);
  }

  // Įkelti paslaugų sąrašą į pasirinkimų lauką
  function loadServices() {
    const selectElement = document.getElementById('service_id');
  }
    // Turėtumėte gaut