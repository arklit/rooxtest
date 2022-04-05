import Title from "../Title/Title";
import React from "react";
import axios from "axios";
import { IUser } from "../../types/types";
import { useParams } from 'react-router-dom'
import { ProfileParams } from '../../types/types'
import { useForm } from "../../validation/useForm";

function Profile() {
  const [user, setUser] = React.useState<IUser | null>(null)
  const [isReadOnly, setIsReadOnly] = React.useState(true)
  const params = useParams<ProfileParams>()
  const [submitDisabled, setSubmitDisabled] = React.useState(true)
  const { values, handleChange, errors, isValid } = useForm({
    name: user?.name, 
    username: user?.username,
    email: user?.email,
    city: user?.address.city,
    street: user?.address.street,
    zipcode: user?.address.zipcode,
    phone: user?.phone,
    website: user?.website,
  })
  
  // function editName(event: any) {
  //   setName(event.target.value)
  // }
  async function getUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/'+ params.id)
      setUser(response.data)
    } catch (e) {
      console.log(e)
    }
  }
  function editClick() {
    setIsReadOnly(false)
    setSubmitDisabled(false)
  }
  function submitHandler(e: any) {
    e.preventDefault()
    console.log('click')
    setSubmitDisabled(true)
    setIsReadOnly(true)
    console.log(values)
  }

  React.useEffect(() => {
    getUser()
  }, [])

  return(
    <div className="profile">
      <div className="profile__header">
        <Title title="Профиль пользователя"/>
        <button type="button" onClick={editClick} className="profile__button">Редактировать</button>
      </div>
      <form className="profile__container" onSubmit={submitHandler}>
        <div className="profile__item">
          <p className="profile__span">Name</p>
          <input className="profile__input"
          type="text"
          id="name"
          name="name"
          readOnly={isReadOnly}
          required
          onChange={handleChange}
          placeholder="Имя"
          value={isReadOnly ?  user?.name : values.name}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Username</p>
          <input className="profile__input"
            type="text"
            id="username"
            name="username"
            required
            onChange={handleChange}
            readOnly={isReadOnly}
            placeholder="Ник"
            value={isReadOnly ?  user?.username : values.username}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">E-mail</p>
          <input className="profile__input"
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
            readOnly={isReadOnly}
            placeholder="email"
            value={isReadOnly ?  user?.email : values.email}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Street</p>
          <input className="profile__input"
           type="text"
           id="street"
           name="street"
           required
           onChange={handleChange}
           readOnly={isReadOnly}
           placeholder="street"
           value={isReadOnly ?  user?.address.street : values.street}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">City</p>
          <input className="profile__input"
           type="text"
           id="city"
           name="city"
           required
           onChange={handleChange}
           readOnly={isReadOnly}
           placeholder="city"
           value={isReadOnly ?  user?.address.city : values.city}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Zip-code</p>
          <input className="profile__input"
           type="text"
           id="zipcode"
           name="zipcode"
           required
           onChange={handleChange}
           readOnly={isReadOnly}
           placeholder="zip-code"
           value={isReadOnly ?  user?.address.zipcode : values.zipcode}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Phone</p>
          <input className="profile__input"
           type="text"
           id="phone"
           name="phone"
           required
           onChange={handleChange}
           readOnly={isReadOnly}
           placeholder="phone"
           value={isReadOnly ?  user?.phone : values.phone}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Website</p>
          <input className="profile__input"
           type="text"
           id="website"
           name='website'
           required
           onChange={handleChange}
           readOnly={isReadOnly}
           placeholder="city"
           value={isReadOnly ?  user?.website : values.website}/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Comment</p>
          <textarea className="profile__input profile__comment"
          name="comment"
          readOnly={isReadOnly}
          id="comment"/>
        </div>
        <button disabled={submitDisabled} 
        className={`profile__button profile__submit ${submitDisabled ? "profile__button_disabled" : ''}`}
        type="submit">Отправить</button>
      </form>
    </div>
  )
}
export default Profile;