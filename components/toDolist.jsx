import React from 'react'

export default function toDolist(prop) {

   
  
    return (
    <>
   <div className='todo-style'> 
   <i className='fa fa-times' aria-hidden="true" onClick={() => {
     prop.onSelect(prop.id);
   }}/>

   <li>{prop.text}</li>
   </div>
   </>
  );
};
