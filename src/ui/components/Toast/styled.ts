import styled from 'styled-components';
import { baseTheme } from 'ui/theme/theme';

export const Wrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 20px;
  right: -300px;
  background: ${baseTheme.colors.charcoal};
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  transition: right 0.5s ease-in-out;
  z-index: ${baseTheme.index.modal};

  ${({ show }) =>
    show &&
    `
    right: 20px;
  `}
`;
