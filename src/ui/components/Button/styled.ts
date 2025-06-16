import styled from 'styled-components';
import { baseTheme } from 'ui/theme/theme';

export const StyledButton = styled.button`
  background-color: ${baseTheme.colors.emeraldGreen};
  color: ${baseTheme.colors.white};
  border: none;
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: ${baseTheme.radius.normal};
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;
  &:hover {
    background-color: ${baseTheme.colors.greenStrong};
  }

  &:disabled {
    background-color: ${baseTheme.colors.grayMedium};
    cursor: not-allowed;
  }
`;
