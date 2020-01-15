import React from 'react';
import { fixUrlProtocol } from '../../../helpers';

const UserData = ({ user, setEditMode }) => {
  const { name = '', phone = '', email = '', website = '' } = user;
  const handleClick = (event) => {
    event.preventDefault();
    setEditMode(true);
  };
  return (
    <>
      <p>{name}</p>
      {phone && <p>{phone}</p>}
      {email && (
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
      {website && (
        <p>
          <a
            href={fixUrlProtocol(website)}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {website}
          </a>
        </p>
      )}
      <p>
        <button type="button" className="btn btn-primary" onClick={(event) => handleClick(event)}>
          Редактировать
        </button>
      </p>
    </>
  );
};

export default UserData;
