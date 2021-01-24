import React from 'react';
import { User } from '../../types/users';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type UserRowProps = {
  user: User;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
  margin: 10px;

  &:hover {
    opacity: 0.6;
  }
`;

const Text = styled.p`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 5px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function UserRow({ user }: UserRowProps) {
  const { login, avatar_url, html_url } = user;

  return (
    <Wrapper>
      <StyledLink to={`/user/${login}`}>
        <Image src={avatar_url} alt="user avatar" />
        <Text>{login}</Text>
      </StyledLink>

      <a href={html_url} target="_blank" rel="noreferrer">
        Github profile
      </a>
    </Wrapper>
  );
}
