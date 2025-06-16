import { ChangeEvent, FC, useState } from 'react';
import { ErrorMessage, StyledInput, Wrapper } from './styled';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  name?: string;
  uppercase?: boolean;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  error,
  name,
  uppercase = false,
}) => {
  const [touched, setTouched] = useState<boolean>(false);

  const onBlurHandler = () => {
    setTouched(true);
  };

  const isHasError = !!value ? !!error : touched && !!error;

  return (
    <Wrapper>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        hasError={isHasError}
        onBlur={onBlurHandler}
        name={name}
        uppercase={uppercase}
      />
      {isHasError && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};
