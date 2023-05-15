//class
class User {
  constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  }
  
  //מערך user
  let users = [];
  
  // יצירת user חדש
  function createUser(name, email, phone) {
    let newUser = new User(name, email, phone);
    users.push(newUser);
    return newUser;
  }
  
  // עדכון
  function updateUser(id, name, email, phone) {
    let user = users.find(user => user.id === id);
    if (!user) {
      return null;
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    return user;
  }
  
  // delet
  function deleteUser(id) {
    let index = users.findIndex(user => user.id === id);
    if (index === -1) {
      return null;
    }
    let deletedUser = users.splice(index, 1);
    return deletedUser[0];
  }
  
  //get by id
  function getUserById(id) {
    let user = users.find(user => user.id === id);
    return user || null;
  }
  
  // ייצוא פונקציות
  module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById
  };
  //------------