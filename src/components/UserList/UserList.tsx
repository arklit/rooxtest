import { IUser } from "../../types/types"
import UserItem from "../UserItem/UserItem"
import Title from "../Title/Title"

interface UserListProps {
  users: IUser[]
}
function UserList({users}: UserListProps) {
 return(
    <div className='userList'>
    <Title title="Список пользователей" />
    <div className="userList__container">
      {users.map(user => 
        <UserItem key={user.id} user={user}/>
      )}
    </div>
    <p className="userList__count">{`Найдено ${users.length} пользователей`}</p>
   </div>
 )
}
export default UserList