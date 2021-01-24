import React from 'react';
import styled from 'styled-components';

// styles
const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

const Arrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
`;

const ArrowLeft = styled(Arrow)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

const ArrowRight = styled(Arrow)`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

const PageNumber = styled.div`
  font-size: 20px;
`;

type PaginationProps = {
  onNextClick: () => void;
  onPrevClick: () => void;
  page: number;
};

export function Pagination({
  onNextClick,
  onPrevClick,
  page,
}: PaginationProps) {
  return (
    <Wrapper>
      <ArrowContainer onClick={onPrevClick}>
        <ArrowLeft />
      </ArrowContainer>
      <PageNumber>{page}</PageNumber>
      <ArrowContainer onClick={onNextClick}>
        <ArrowRight />
      </ArrowContainer>
    </Wrapper>
  );
}
