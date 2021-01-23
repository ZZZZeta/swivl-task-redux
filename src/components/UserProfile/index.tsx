import React from 'react';
import { FullUser } from '../../types/users';

type UserProfileProps = {
  user: Partial<FullUser>;
};

export function UserProfile({ user }: UserProfileProps) {
  const {
    avatar_url,
    name,
    followers,
    following,
    created_at,
    company,
    email,
    location,
    blog,
    bio,
  } = user;

  return (
    <div>
      <img src={avatar_url} alt="user avatar" />
      <div>{name}</div>
      <div>Followers: {followers}</div>
      <div>Following: {following}</div>
      <div>Created: {created_at}</div>
      <div>Company: {company}</div>
      <div>{email}</div>
      <div>{location}</div>
      <div>{blog}</div>
      <div>{bio}</div>
    </div>
  );
}
