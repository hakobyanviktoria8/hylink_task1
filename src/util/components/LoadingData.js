import React from 'react'

function LoadingData({isLoading, children}) {
  return (
    !isLoading ? 
        <h3>Loading...</h3>
        :
        children
  )
}

export default LoadingData