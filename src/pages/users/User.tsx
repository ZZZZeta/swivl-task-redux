import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

// redux
import { getUser } from '../../redux/users/actions';
import { selectUser, selectIsLoading } from '../../redux/users/selectors';

// components
import { UserProfile } from '../../components/UserProfile';
import { Preloader } from '../../components/Preloader';

type ParamsTypes = {
  username: string;
};

export function User() {
  const dispatch = useDispatch();
  const { username } = useParams<ParamsTypes>();
  const user = useSelector(selectUser);
  const isLoadingUser = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username]);

  return (
    <>
      <Preloader isLoading={isLoadingUser} message="Loading..." />
      <UserProfile user={user} />
    </>
  );
}
