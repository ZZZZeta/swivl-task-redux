import React from 'react';
import { User } from '../../types/users';
import { Link } from 'react-router-dom';

type UserRowProps = {
  user: User;
};

export function UserRow({ user }: UserRowProps) {
  const { login, avatar_url } = user;

  return (
    <div>
      <img
        src={avatar_url}
        alt="user avatar"
        style={{ width: '100px', height: '100px' }}
      />
      <h2>{login}</h2>
      <Link to={`/user/${login}`}>See full profile</Link>
    </div>
  );
}
