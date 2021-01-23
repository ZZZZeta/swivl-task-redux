import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import { UserRow } from '../../components/UserRow';

// redux
import { getUserList } from '../../redux/users/actions';
import { selectUserList } from '../../redux/users/selectors';

export function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(selectUserList);
  console.log(users);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <>
      <h1>User list</h1>
      <div>
        {users.map((user) => (
          <UserRow key={user?.id} user={user} />
        ))}
      </div>
    </>
  );
}
