import './App.css';
import { useEffect, useState } from 'react';
import User from './util/components/User';
import { fetchData } from './util/helpers/fetchData';

function App() {
  const [users, setUsers] = useState(null);
  
  useEffect(()=> {
    fetchData("https://api.github.com/users", setUsers)
  },[])
  
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username </th>
            <th>Type</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => 
            <User user={user}/>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
