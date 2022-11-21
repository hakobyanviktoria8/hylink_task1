import React, { useState, useEffect } from 'react'

function GetUserData() {
    const [id, setId] = useState(1);
    const [userData, setUserData] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        try {
            fetch(`https://api.github.com/users/${id}`)
            .then(res=> res.json())
            .then(data=>setUserData(data))
          } catch (error) {
            setErr(error)
          }
    }, [id, err])
    
  return (
    <div>
        <button onClick={()=> setId(id+1)}>Next user</button>
        <p>{id}. {userData?.name || userData?.login}</p>
        <p>Error {err || err?.message}</p>  
    </div>
  )
}

export default GetUserData