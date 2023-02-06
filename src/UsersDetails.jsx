import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
// import './styles.css';
export const UsersDetails = (props) => {
    const {details} = props
    const {id,subject,body,metrics} = details  
  return (

    <li className='list' type="none"> 
   <p>id:{id}</p>
        <p className='para'>subject:{subject}</p>
        <p className='para'>Body : <span dangerouslySetInnerHTML={{__html : body}}></span></p>
        <p>views:{metrics.views}</p>

        <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet" size="large">
click
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Id : {id}</Dialog.Title>
        <Dialog.Description className="DialogDescription">
         Subject : {subject}
        </Dialog.Description>
        <Dialog.Description className="DialogDescription">
         Body :<span dangerouslySetInnerHTML={{__html : body}}></span>
        </Dialog.Description>
        <Dialog.Description className="DialogDescription">
         views : {metrics.views}
        </Dialog.Description>
        
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="Button green">close</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  </li> 
      
     
  )
}