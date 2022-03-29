import { userInfo } from "os";
import { Link } from "react-router-dom"
import { IUser } from "../../types/types"

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void
}
function UserItem({user, onClick} : UserItemProps) {
  return(
    <div className="userItem">
      <div className="userItem__container">
        <div className="userItem__block">
        <p className="userItem__element">ФИО: </p>
        <p className="userItem__answer">{user.name}</p>
        </div>
        <div className="userItem__block">
        <p className="userItem__element">город:</p>
        <p className="userItem__answer">{user.address.city}</p>
        </div>
        <div className="userItem__block">
        <p className="userItem__element">компания: </p>
        <p className="userItem__answer">{user.company.name}</p>
        </div>
      </div>
      <p className="userItem__link" onClick={() => onClick(user)}>Подробнее</p>
    </div>
  )
}
export default UserItem