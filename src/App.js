import './util/styles/App.css';
import { useEffect, useState } from 'react';
import User from './util/components/User';
import { fetchData } from './util/helpers/fetchData';
import ReactPaginate from 'react-paginate';
import LoadingData from './util/components/LoadingData';
import ReduxExampl from './util/components/ReduxExampl';
import GetUserData from './util/components/GetUserData';
import Calculator from './util/components/Calculator';

function App() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  
  const usersPerPage = 10;
  const [perPageUsersCount, setPerPageUsersCount] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const[currentUsersDataSort, setCurrentUsersDataSort] = useState(null);

  const endUsersCount = perPageUsersCount + usersPerPage;
  const currentUsersData = users?.slice(perPageUsersCount, endUsersCount);
  const pageCount = !searchValue ? 
    Math.ceil(users?.length / usersPerPage)
    :
    Math.ceil(currentUsersData?.length / usersPerPage)

  useEffect(()=> {
    fetchData("https://api.github.com/users", setUsers)
    setTimeout(()=>{
      setIsLoading(true)
    }, 500)
  },[])

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    setCurrentUsersDataSort(users?.filter(user => user.login.includes(searchValue)))
  }, [searchValue])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * usersPerPage) % users.length;
    setPerPageUsersCount(newOffset);
  };  
  
  return (
    <LoadingData isLoading={isLoading}>
      {/* <ReduxExampl /> */}
      <GetUserData />
      <hr />
      <Calculator />
      <hr />
      <div className="App">
        <input 
          type="search" 
          value={searchValue}
          placeholder="Search user..." 
          onChange={handleChange}
        />

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
            {(searchValue ? currentUsersDataSort : currentUsersData)?.map(user => 
                <User user={user} key={user.id}/>
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
    </LoadingData>
  );
}

export default App;
