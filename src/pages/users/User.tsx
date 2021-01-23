import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { getUser } from '../../redux/users/actions';
import { selectUser } from '../../redux/users/selectors';
import { useParams } from 'react-router';
import { UserProfile } from '../../components/UserProfile';

type ParamsTypes = {
  username: string;
};

export function User() {
  const dispatch = useDispatch();
  const { username } = useParams<ParamsTypes>();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username]);

  return <UserProfile user={user} />;
}
