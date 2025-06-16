import styled from 'styled-components';
import { baseTheme } from 'ui/theme/theme';

interface AminoCharProps {
  color: string;
  isDifferent?: boolean;
  secondRow?: boolean;
}

export const ViewerContainer = styled.div`
  white-space: pre-wrap;
  word-break: break-word;
  user-select: text;
  padding: 1.5rem;
  border: 1px solid ${baseTheme.colors.grayLightest};
  border-radius: ${baseTheme.radius.big};
  line-height: 2;
  cursor: text;
  background-color: ${baseTheme.colors.white};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.06);
  }
`;

export const SequenceRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 1px;
  position: relative;
`;

export const AminoChar = styled.span<AminoCharProps>`
  background-color: ${({ color, isDifferent, secondRow }) =>
    secondRow ? (isDifferent ? color : baseTheme.colors.white) : color};
  text-align: center;
  font-size: 20px;
  width: 20px;
  display: inline-block;
  font-weight: 600;
  padding: 0px 2px;
  border-radius: ${baseTheme.radius.small};
`;

export const SearchableTextLayer = styled.div`
  position: absolute;
  top: 0px;
  left: 5px;
  font-family: monospace;
  color: transparent;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 8.9px;
  white-space: pre-wrap;
  pointer-events: none;
  line-height: 1.85;
`;
