import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserList from '../UserList/UserList';
import SortBar from '../SortBar/SortBar';
import Profile from '../Profile/Profile';
import {IUser} from '../../types/types'
import axios from 'axios';

function App() {
  const [users, setUsers] = React.useState<IUser[]>([])
  async function getUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      console.log(e)
    }
  }


  React.useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">
      <SortBar/>
      <Routes>
        <Route path='/users' element={<UserList users={users}/>}/>
        <Route path='/users/:id' element={<Profile/>}/>
        <Route path="*" element={<Navigate to="/users"/>}/>
      </Routes>
    </div>
  );
}

export default App;
