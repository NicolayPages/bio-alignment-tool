import { FC } from 'react';

import { getAminoColor } from 'utils/getAminoColor';

import {
  AminoChar,
  SearchableTextLayer,
  SequenceRow,
  ViewerContainer,
} from './styled';

interface Props {
  seq1: string;
  seq2: string;
  onCopy: (text: string) => void;
}

export const AlignmentViewer: FC<Props> = ({ seq1, seq2, onCopy }) => {
  const selectionHandler = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      onCopy(selection.toString().replace(/\s+/g, ''));
      setTimeout(() => selection.removeAllRanges(), 1000);
    }
  };

  return (
    <ViewerContainer onMouseUp={selectionHandler}>
      <SequenceRow>
        {Array.from(seq1).map((char, index) => (
          <AminoChar key={`top-${index}`} color={getAminoColor(char)}>
            {char}
          </AminoChar>
        ))}
        <SearchableTextLayer aria-hidden="true">{seq1}</SearchableTextLayer>
      </SequenceRow>

      <SequenceRow>
        {Array.from(seq2).map((char, index) => {
          const isDifferent = char !== seq1[index];
          return (
            <AminoChar
              key={`bottom-${index}`}
              color={getAminoColor(char)}
              secondRow
              isDifferent={isDifferent}
            >
              {char}
            </AminoChar>
          );
        })}
        <SearchableTextLayer aria-hidden="true">{seq2}</SearchableTextLayer>
      </SequenceRow>
    </ViewerContainer>
  );
};
