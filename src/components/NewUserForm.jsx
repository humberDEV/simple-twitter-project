import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function NewUserForm({ addNewUser }) {
    
    const [newName, setNewName] = useState("");
    const [newUserName, setNewUserName] = useState("");
  
    const createNewUser = () => {
      if (!newName || !newUserName) {
        alert('Por favor, completa todos los campos.');
        return;
      }
  
      const newUser = {
        name: newName,
        username: newUserName,
        initialIsFollowing: false,
      };
  
      addNewUser(newUser);
      // setNewName('');
      // setNewUserName('');  !!! AQUÍ ME AYUDÓ GPT3, PREGUNTAR
    }
  
    return (
      <div className="form-container">
        <form className="form">
          <h2>New user form</h2>
          <input
            className="user-input"
            placeholder="Name"
            type="text"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
          <input
            className="user-input"
            placeholder="Username"
            type="text"
            value={newUserName}
            onChange={(event) => setNewUserName(event.target.value)}
          />
          <button onClick={createNewUser} className="create-button" type="button">Create user</button>
        </form>
      </div>
    );
  }