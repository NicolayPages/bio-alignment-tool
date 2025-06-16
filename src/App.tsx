import { FC } from 'react';

import { MainLayout } from 'layouts/MainLayout';

import { GlobalStyles } from 'ui/theme/global';

export const App: FC = () => {
  return (
    <>
      <MainLayout />
      <GlobalStyles />
    </>
  );
};
