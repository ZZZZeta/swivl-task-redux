import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// components
import { UserRow } from '../../components/UserRow';
import { Preloader } from '../../components/Preloader';
import { Pagination } from '../../components/Pagination';

// redux
import { getUserList } from '../../redux/users/actions';
import { selectUserList, selectIsLoading } from '../../redux/users/selectors';

// utils
import { useGHPagination } from '../../hooks/usePagination';

// styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export function UserList() {
  const dispatch = useDispatch();
  const { page, since, nextPage, prevPage } = useGHPagination(100);
  const users = useSelector(selectUserList);
  const isUserLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getUserList(100, since));
  }, [dispatch, since]);

  return (
    <Wrapper>
      <Preloader isLoading={isUserLoading} message="Loading..." />
      <ListWrapper>
        <Pagination
          onNextClick={() => nextPage()}
          onPrevClick={() => prevPage()}
          page={page}
        />
        <List>
          {users.map((user) => (
            <UserRow key={user?.id} user={user} />
          ))}
        </List>
      </ListWrapper>
    </Wrapper>
  );
}
