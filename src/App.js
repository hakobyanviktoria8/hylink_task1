import './App.css';
import { useEffect, useState } from 'react';
import User from './util/components/User';
import { fetchData } from './util/helpers/fetchData';
import ReactPaginate from 'react-paginate';

function App() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // if we want can change per page users count 20 
  const usersPerPage = 10;
  const [perPageUsersCount, setPerPageUsersCount] = useState(0);
  const endUsersCount = perPageUsersCount + usersPerPage;
  const currentUsersData = users?.slice(perPageUsersCount, endUsersCount);
  const pageCount = Math.ceil(users?.length / usersPerPage);
  
  useEffect(()=> {
    fetchData("https://api.github.com/users", setUsers)
    setIsLoading(true)
  },[])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * usersPerPage) % users.length;
    setPerPageUsersCount(newOffset);
  };  
  
  return (
    !isLoading ? 
      <h2>Loading...</h2>
      : 
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
            {currentUsersData?.map(user => 
              <User user={user}/>
            )}
          </tbody>
        </table>
        
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
  );
}

export default App;
