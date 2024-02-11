  // Sample initial data

let db = {
    users: [
      { id: 1, name: "John", age: 30 },
      { id: 2, name: "Alice", age: 25 },
      { id: 3, name: "Bob", age: 35 }
    ]
  };

  //function to render user list

  function renderUser(){
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    db.users.map(({id,name,age})=>{
      const li = document.createElement('li');
            li.textContent = `ID : ${id}, Name: ${name}, Age:${age}`;
            userList.appendChild(li); 
    });


  //   db.users.forEach(({id,name,age})=>{
  //       const li = document.createElement('li');
  //       li.textContent = `ID : ${id}, Name: ${name}, Age:${age}`;
  //       userList.appendChild(li); 
  //   })
  };


  // function to create new user

  const createNewUser = document.getElementById('createUser');

  createNewUser.addEventListener("click", function() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const newUser = {id:db.users.length+1, name, age};
    db.users.push(newUser);
  
    renderUser();

  });

// Function to read all users
function readUsers() {
  return db.users;
  }
console.log(readUsers()); 


// function to read user by id
function readUserById(id) {
  return db.users.find(user => user.id === id);
}

console.log(readUserById(2));

// update user by id
function updateUserByID(id,newData){
  const index = db.users.findIndex(user=>user.id === id)

  if(index !==-1){
    db.users[index] = {...db.users[index], ...newData};
    renderUser();
    return db.users[index];
  }
  return null; // User not found
}

const updateData = {name:'rammm', age:54};

const result = updateUserByID(2,updateData)

console.log(result);


// Function to delete a user by ID
function deleteUserById(id) {
  const index = db.users.findIndex(user => user.id === id);
  if (index !== -1) {
    db.users.splice(index, 1, { id: 5, name: "John", age: 770 });
    renderUser();
    return true;
  }
  return false; // User not found
}

deleteUserById(1);

//   initial order
  renderUser();