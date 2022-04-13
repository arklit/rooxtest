import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserList from '../UserList/UserList';
import SortBar from '../SortBar/SortBar';
import Profile from '../Profile/Profile';
import {IUser} from '../../types/types'
import axios from 'axios';
type Sort = {
  sort: Sort
}
function App() {
  const [users, setUsers] = React.useState<IUser[]>([])
  const [selectedSort, setSelectedSort] = React.useState('')
  async function getUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      console.log(e)
    }
  }
  // function sortCityUsers() {
  //   users.sort(function (a, b) {
  //     if (a.address.city > b.address.city) {
  //       return 1
  //     }
  //     if (a.address.city < b.address.city) {
  //       return -1;
  //     }
  //     return 0
  //   })
  // }
  // function sortCompanyUsers() {
  //   const draftList= [...users]
  //   draftList.sort(function (a, b) {
  //     if (a.company.name > b.company.name) {
  //       return 1
  //     }
  //     if (a.company.name < b.company.name) {
  //       return -1;
  //     }
  //     return 0
  //   })
  // }
  const handleSort = (type: any) => {
    const draftList = [...users];
    switch (type) {
      case 'sortCity':
        draftList.sort((a, b) => a.address.city.localeCompare(b.address.city));
        break;
      case 'sortCompany':
        draftList.sort((a, b) => a.company.name.localeCompare(b.company.name));
        break;
    }
    setUsers(draftList);
  }



  React.useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">
      <SortBar 
      handlerCitySort={() =>handleSort('sortCity')}
      handlerCompanySort={() => handleSort('sortCompany')}/>
      <Routes>
        <Route path='/users' element={<UserList users={users}/>}/>
        <Route path='/users/:id' element={<Profile/>}/>
        <Route path="*" element={<Navigate to="/users"/>}/>
      </Routes>
    </div>
  );
}

export default App;
