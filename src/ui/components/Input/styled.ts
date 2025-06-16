import styled, { css } from 'styled-components';
import { baseTheme } from 'ui/theme/theme';

interface StyledInputProps {
  hasError: boolean;
  uppercase?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledInput = styled.input<StyledInputProps>`
  padding: 10px 12px;
  border: 2px solid
    ${({ hasError }) =>
      hasError ? baseTheme.colors.brightRed : baseTheme.colors.grayMedium};
  border-radius: ${baseTheme.radius.normal};
  font-size: 1rem;
  outline: none;
  &::placeholder {
    text-transform: none;
  }
  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `};
  &:focus {
    border-color: ${baseTheme.colors.emeraldGreen};
  }
`;

export const ErrorMessage = styled.span`
  color: ${baseTheme.colors.brightRed};
  font-size: 0.875rem;
`;
