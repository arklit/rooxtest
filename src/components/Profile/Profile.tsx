import Title from "../Title/Title";
import React, { useReducer } from "react";
import axios from "axios";
import { IUser } from "../../types/types";
import { useParams } from 'react-router-dom'
type ProfileParams = {
  id: string;
}
  function Profile() {
  const [user, setUser] = React.useState<IUser | null>(null)
  const params = useParams<ProfileParams>()

  async function getUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/'+ params.id)
      setUser(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  React.useEffect(() => {
    getUser()
  }, [])
  return(
    <div className="profile">
      <div className="profile__header">
        <Title title="Профиль пользователя"/>
        <button type="button" className="profile__button">Редактировать</button>
      </div>
      <form className="profile__container">
        <div className="profile__item">
          <p className="profile__span">Name</p>
          <input className="profile__input"
          type="text"
          id="name"
          required
          placeholder="Имя"
          value={user?.name}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Username</p>
          <input className="profile__input"
            type="text"
            id="username"
            required
            placeholder="Ник"
            value={user?.username}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">E-mail</p>
          <input className="profile__input"
            type="email"
            id="email"
            required
            placeholder="email"
            value={user?.email}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Street</p>
          <input className="profile__input"
           type="text"
           id="street"
           required
           placeholder="street"
           value={user?.address.street}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">City</p>
          <input className="profile__input"
           type="text"
           id="city"
           required
           placeholder="city"
           value={user?.address.city}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Zip-code</p>
          <input className="profile__input"
           type="text"
           id="zipcode"
           required
           placeholder="zip-code"
           value={user?.address.zipcode}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Phone</p>
          <input className="profile__input"
           type="text"
           id="phone"
           required
           placeholder="email"
           value={user?.phone}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Website</p>
          <input className="profile__input"
           type="url"
           id="website"
           required
           placeholder="city"
           value={user?.website}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Comment</p>
          <textarea className="profile__input profile__comment"
          id="comment"/>
        </div>
      </form>
    </div>
  )
}
export default Profile;