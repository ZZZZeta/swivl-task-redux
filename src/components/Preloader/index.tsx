import React from 'react';

type PreloaderProps = {
  isLoading: boolean;
  message: string;
};

export function Preloader({ isLoading, message }: PreloaderProps) {
  return isLoading ? (
    <div
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#fff',
        opacity: '0.7',
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {message}
    </div>
  ) : null;
}
