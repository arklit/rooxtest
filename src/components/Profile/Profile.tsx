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
    name: '', 
    username: '',
    email: '',
    city: '',
    street: '',
    zipcode: '',
    phone: '',
    website: '',
    comment: ''
  })
  

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
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitDisabled(true)
    setIsReadOnly(true)
    let json = JSON.stringify(values)
    console.log(json)
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
          minLength={2}
          onChange={handleChange}
          placeholder="Имя"
          value={isReadOnly ?  user?.name : values.name}/>
        </div>
        { errors.name  && (
          <span className="profile__error">{ errors.name }</span>
        )}
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
        { errors.username  && (
          <span className="profile__error">{ errors.username }</span>
        )}
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
        { errors.email  && (
          <span className="profile__error">{ errors.email }</span>
        )}
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
        { errors.street  && (
          <span className="profile__error">{ errors.street }</span>
        )}
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
        { errors.city  && (
          <span className="profile__error">{ errors.city }</span>
        )}
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
        { errors.zipcode  && (
          <span className="profile__error">{ errors.zipcode }</span>
        )}
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
        { errors.phone  && (
          <span className="profile__error">{ errors.phone }</span>
        )}
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
        { errors.website  && (
          <span className="profile__error">{ errors.website }</span>
        )}
        <div className="profile__item">
          <p className="profile__span">Comment</p>
          <textarea className="profile__input profile__comment"
          name="comment"
          readOnly={isReadOnly}
          onChange={handleChange}
          value={values.comment}
          id="comment"/>
        </div>
        <button disabled={!isValid} 
        className={`profile__button profile__submit ${!isValid || submitDisabled ? "profile__button_disabled" : ''}`}
        type="submit">Отправить</button>
      </form>
    </div>
  )
}
export default Profile;