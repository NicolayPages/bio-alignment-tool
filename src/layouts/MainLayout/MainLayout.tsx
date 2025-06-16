import { FC } from 'react';

import { AminoAcidAlign } from 'pages/AminoAcidAlign';

import { Wrapper } from './styled';

export const MainLayout: FC = () => {
  return (
    <Wrapper>
      <AminoAcidAlign />
    </Wrapper>
  );
};
