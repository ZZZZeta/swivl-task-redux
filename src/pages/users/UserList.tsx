import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import { UserRow } from '../../components/UserRow';
import { Preloader } from '../../components/Preloader';
import { Pagination } from '../../components/Pagination';

// redux
import { getUserList } from '../../redux/users/actions';
import { selectUserList, selectIsLoading } from '../../redux/users/selectors';

// utils
import { useGHPagination } from '../../hooks/usePagination';

export function UserList() {
  const dispatch = useDispatch();
  const { page, since, nextPage, prevPage } = useGHPagination(100);
  const users = useSelector(selectUserList);
  const isUserLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getUserList(100, since));
  }, [dispatch, since]);

  return (
    <>
      <Preloader isLoading={isUserLoading} message="Loading..." />
      <h1>User list</h1>
      <div>
        {users.map((user) => (
          <UserRow key={user?.id} user={user} />
        ))}
      </div>
      <Pagination
        onNextClick={() => nextPage()}
        onPrevClick={() => prevPage()}
        page={page}
      />
    </>
  );
}
