import React from 'react'

export const UsersDetails = (props) => {
    const {details} = props
    const {id,subject,body,metrics} = details
  return (
    <div className='center'> 
     <div className='msg'>
      
        <p><b>id:</b>{id}</p>
        <p><b>subject:</b>{subject}</p>
        <p dangerouslySetInnerHTML={{__html : body}}></p>
        <p><b>views:</b>{metrics.views}</p>
        <hr /> 
      </div>  
      </div>
     
  )
}