import { useEffect, useState } from 'react';

const aminoRegex = /^[ACDEFGHIKLMNPQRSTVWY\-]+$/i;

const aminoLengthMatch = (seq1: string, seq2: string) => {
  return seq1.length === seq2.length || seq1.length === 0 || seq2.length === 0;
};

const aminoFormatCheck = (sequence: string) => {
  return aminoRegex.test(sequence);
};

const aminoRequiredCheck = (sequence: string) => {
  return sequence.trim().length > 0;
};

const validateSequences = (seq1: string, seq2: string): [string, string] => {
  const errors: [string, string] = ['', ''];

  if (!aminoRequiredCheck(seq1)) {
    errors[0] = 'Поле обязательное.';
  } else if (!aminoFormatCheck(seq1)) {
    errors[0] = 'Неверный формат аминокислот.';
  }

  if (!aminoRequiredCheck(seq2)) {
    errors[1] = 'Поле обязательное.';
  } else if (!aminoFormatCheck(seq2) || !aminoLengthMatch(seq1, seq2)) {
    if (!aminoFormatCheck(seq2)) {
      errors[1] = 'Неверный формат аминокислот.';
    } else {
      errors[1] = 'Длина последовательностей должна совпадать.';
    }
  }

  return errors;
};

export const useFormValidation = (seq1: string, seq2: string) => {
  const [errors, setErrors] = useState<[string, string]>(['', '']);

  useEffect(() => {
    setErrors(validateSequences(seq1, seq2));
  }, [seq1, seq2]);

  const isValid = errors.every((e) => !e);

  return {
    errors,
    isValid,
  };
};
