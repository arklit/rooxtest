import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserList from '../UserList/UserList';
import SortBar from '../SortBar/SortBar';
import Profile from '../Profile/Profile';
import {IUser} from '../../types/types'
import { Oval } from 'react-loader-spinner';
import axios from 'axios';
function App() {
  const [users, setUsers] = React.useState<IUser[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  async function getUsers() {
    try {
      setIsLoading(true)
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
    }
  }
  const handleSort = (type: any) => {
    const draftList = [...users];
    switch (type) {
      case 'sortCity':
        draftList.sort((a, b) => a.address.city.localeCompare(b.address.city));
        break;
      case 'sortName':
        draftList.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    setUsers(draftList);
  }



  React.useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
    {isLoading ? (
    <div className="loader">
    <Oval
    height={100}
    width={100}
    color="blue"/>
    </div>) : (
    <div className="App">
      <SortBar 
      handlerCitySort={() =>handleSort('sortCity')}
      handlerCompanySort={() => handleSort('sortName')}/>
      <Routes>
        <Route path='/users' element={<UserList users={users}/>}/>
        <Route path='/users/:id' element={<Profile/>}/>
        <Route path="*" element={<Navigate to="/users"/>}/>
      </Routes>
    </div>
    )}
    </>
  );
}

export default App;
