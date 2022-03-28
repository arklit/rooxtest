import Title from "../Title/Title";
function Profile() {
  return(
    <div className="profile">
      <div className="profile__header">
        <Title title="Профиль пользователя"/>
        <button type="button" className="profile__button">Редактировать</button>
      </div>
      <div className="profile__container">
        <div className="profile__item">
          <p className="profile__span">Name</p>
          <input className="profile__input"/>
        </div>
        <div className="profile__item">
          <p className="profile__span">User name</p>
          <input className="profile__input"/>
        </div>
        <div className="profile__item">
          <p className="profile__span">E-mail</p>
          <input className="profile__input"/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Street</p>
          <input className="profile__input"/>
        </div>
        <div className="profile__item">
          <p className="profile__span">City</p>
          <input className="profile__input"/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Zip-code</p>
          <input className="profile__input"/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Phone</p>
          <input className="profile__input"/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Website</p>
          <input className="profile__input"/>
        </div>
        <div className="profile__item">
          <p className="profile__span">Comment</p>
          <input className="profile__input"/>
        </div>
      </div>
    </div>
  )
}
export default Profile;