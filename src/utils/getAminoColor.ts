import { AMINO_COLORS } from 'constants/aminoAcidColors';
import { baseTheme } from 'ui/theme/theme';

export const getAminoColor = (aa: string): string => {
  const defColor = baseTheme.colors.white;

  if (aa === '-') {
    return defColor;
  }

  if (AMINO_COLORS[aa]) {
    return AMINO_COLORS[aa];
  }

  return defColor;
};
