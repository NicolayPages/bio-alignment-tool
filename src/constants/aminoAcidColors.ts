import { baseTheme } from 'ui/theme/theme';

const { colors } = baseTheme;

const cysteine = colors.brightYellow;
const glycine = colors.grayLight;
const negative = colors.pastelPink;
const positive = colors.lavender;
const polar = colors.lightSkyBlue;
const hydrophobic = colors.mintGreen;

export const AMINO_COLORS: Record<string, string> = {
  C: cysteine, // Цистеин
  G: glycine, // Глицин
  D: negative, // Отрицательно заряженные
  E: negative,
  K: positive, // Положительно заряженные
  R: positive,
  S: polar, // Полярные не заряженные
  T: polar,
  H: polar,
  Q: polar,
  N: polar,
  A: hydrophobic, //Гидрофобные
  I: hydrophobic,
  L: hydrophobic,
  M: hydrophobic,
  W: hydrophobic,
  Y: hydrophobic,
  V: hydrophobic,
  P: hydrophobic,
  F: hydrophobic,
};
