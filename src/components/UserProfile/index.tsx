import React from 'react';
import { FullUser } from '../../types/users';
import styled from 'styled-components';

// utils
import { parseDate } from '../../utils/parseDate';

// styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
`;

type UserProfileProps = {
  user: Partial<FullUser>;
};

// sometimes fields bio, email, company, blog can be empty
// that`s why i use {property &&...} syntax

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
    <Wrapper>
      <Profile>
        <img src={avatar_url} alt="user avatar" />
        <Text>{name}</Text>
        <Text>Followers: {followers}</Text>
        <Text>Following: {following}</Text>
        <Text>Created: {parseDate(created_at as string)}</Text>
        {company && <Text>Company: {company}</Text>}
        {email && <Text>{email}</Text>}
        {location && <Text>Location: {location}</Text>}
        {blog && (
          <Text>
            <a href={blog} target="_blank" rel="noreferrer">
              {blog}
            </a>
          </Text>
        )}
        {bio && <Text>{bio}</Text>}
      </Profile>
    </Wrapper>
  );
}
