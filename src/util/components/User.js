import React, {useState} from 'react'
import '../../App.css';
import { fetchData } from '../helpers/fetchData';

function User({user}) {
    const [showMoreData, setShowMoreData] = useState(false);
    const [companyData, setCompanyData] = useState(null);
    const [repos, setRepos] = useState(null);
    const [followers, setFollowers] = useState(null);

    const handleShowMore = () => {
        setShowMoreData(!showMoreData);
        fetchData(user.url, setCompanyData);
        fetchData(user.repos_url, setRepos);
        fetchData(user.followers_url, setFollowers);
        console.log(user, user.repos_url);
    }

  return (
    <>
        <tr key={user.id}>
            <td><img src={user.avatar_url}  alt='avatar img'/></td>
            <td>{user.login}</td>
            <td>{user.type}</td>
            <td><button onClick={handleShowMore}>{!showMoreData ? "Show More" : "Hide Info"}</button></td>
        </tr>
        { showMoreData && 
            <tr key={user.id + new Date().toString()}>
                <td colSpan="4">
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
                                <td>{user.login}</td>
                                <td>{companyData?.name}</td>
                                <td>{companyData?.location}</td>
                                <td>{repos?.length}</td>
                                <td>{followers?.length}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        }
    </>
  )
}

export default User