import React,{useState} from 'react';

import Form from './components/Form';
import UsersList from './components/UsersList';

function App() {
  const [usersList ,setUsersList] = useState([]);

  const addUserHandler =(uName ,uAge) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
    });

  }


  return (
    <div>
<Form onAddUser={addUserHandler}/>
<UsersList users={usersList}/>
    </div>
  );
}

export default App;
