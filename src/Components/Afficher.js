import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

const Afficher = () => {
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);
  
    const loadUsers = () => {
      setLoaded(true);
  
      fetch('http://localhost:8000/users')
        .then(response => response.json())
        .then(data => {
          setUsers(data.map(users => {
            return users;
          }));
        }).catch(error => {
          alert(JSON.stringify(error));
        });
    }
  
    if (!loaded)
      loadUsers();
  
    return (
      <div>
        <h1>Afficher users</h1>
        {users.map(users => {
          return <Link to={`/Afficher/${users._id}`}>{users.username}</Link>
        })}
      </div>
    );
  }

export default Afficher;