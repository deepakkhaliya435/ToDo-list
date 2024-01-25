import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import toDolist from './components/toDolist';

function App() {

  const[inputList , setInputList] = useState('buy apple');

  const[Items ,setItems] = useState([]);

    const itemEvent = (event)=> {
      setInputList(event.target.value);
    };

    const listofItems =() =>{
      setItems((oldItems)=> {
        return [...oldItems , inputList]
      });
      setInputList('');
    }

    const deleteItems = (id)=> {
      console.log('deleted')  
      setItems((oldItems) =>{
        return oldItems.filter((arrElem, index)=>{
         return index !== id ;
        })
      })
    }
    

  return (
    <>
     <div className="container">
      <div className="raw">
        <div className="col-5 center-div">
          <h1 className='heading'>Todo List</h1>
          <input type="text" id='input' placeholder='text a here' value={inputList}  onChange={itemEvent}/>
          <button onClick={listofItems}>+</button>

          <ol>
            
       {  Items.map( (itemval , index)=> {
          return <toDolist
           key ={index.id} id={index} text ={itemval} 
           onSelect = {deleteItems}
           />;
          } ) }

          </ol>
        </div>
      </div>
     </div>

    </>
  );
}

export default App;
