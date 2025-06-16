import { FC, ReactNode } from 'react';
import { Wrapper } from './styled';

interface ToastProps {
  children: ReactNode;
  show: boolean;
}

export const Toast: FC<ToastProps> = ({ children, show }) => {
  return <Wrapper show={show}>{children}</Wrapper>;
};
