import React from 'react';
import styled from 'styled-components';

// styles
const StyledPreloader = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

type PreloaderProps = {
  isLoading: boolean;
  message: string;
};

export function Preloader({ isLoading, message }: PreloaderProps) {
  return isLoading ? <StyledPreloader>{message}</StyledPreloader> : null;
}
