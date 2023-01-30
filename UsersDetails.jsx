import React from 'react'

export const UsersDetails = (props) => {
    const {details} = props
    const {id,subject,body,metrics} = details
  return (
     <div>
      
        <p><b>id:</b>{id}</p>
        <p><b>subject:</b>{subject}</p>
        <p><b>body:</b>{body}</p>
        <p><b>views:</b>{metrics.views}</p>
        <hr /> 
      </div>  
     
  )
}