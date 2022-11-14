import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showMore, setShowMore] = useState(false);
  
  const handleClick = () => {
    setShowMore(!showMore)
  }

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
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td><button onClick={handleClick}>btn</button></td>
          </tr>
          {showMore && 
           <tr>
            <td colspan="4">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Repositories</th>
                  <th>Followers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                  <td>btn</td>
                  <td>wqw</td>
                </tr>
              </tbody>
            </table>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
