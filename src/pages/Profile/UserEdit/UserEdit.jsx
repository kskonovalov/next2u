import React, { useState } from 'react';

const UserEdit = ({ user, updateGlobalUserData }) => {
  const { name = '', phone = '', email = '', website = '' } = user;
  const [userData, setUserData] = useState(user);
  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    updateGlobalUserData(userData);
  };
  return (
    <form onSubmit={event => handleSubmit(event)}>
      <div className="form-group">
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Ваше имя"
          defaultValue={name}
          onChange={event => handleChange(event)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Телефон</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          placeholder="Ваш телефон"
          defaultValue={phone}
          onChange={event => handleChange(event)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Ваш e-mail"
          defaultValue={email}
          onChange={event => handleChange(event)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="website">Сайт</label>
        <input
          type="text"
          className="form-control"
          id="website"
          name="website"
          placeholder="Ваш сайт"
          defaultValue={website}
          onChange={event => handleChange(event)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Сохранить
      </button>
    </form>
  );
};

export default UserEdit;
