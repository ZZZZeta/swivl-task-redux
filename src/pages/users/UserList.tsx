import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import { UserRow } from '../../components/UserRow';

// redux
import { getUserList } from '../../redux/users/actions';
import { selectUserList, selectIsLoading } from '../../redux/users/selectors';
import { Preloader } from '../../components/Preloader';

export function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(selectUserList);
  const isUserLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <>
      <Preloader isLoading={isUserLoading} message="Loading..." />
      <h1>User list</h1>
      <div>
        {users.map((user) => (
          <UserRow key={user?.id} user={user} />
        ))}
      </div>
    </>
  );
}
