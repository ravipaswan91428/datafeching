import { useEffect, useState } from 'react'
import Cards from './components/cards'
import './App.css'

function App() {
  
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  

  return (
    <div className="app-container">
      <h1>UserList</h1>

      {user.map((users) => (
        <Cards
          name={users.name}
          email={users.email}
          phone={users.phone}
          city={users.address?.city}
          company={users.company?.name}
        />
      ))}
    </div>
  )
}

export default App
