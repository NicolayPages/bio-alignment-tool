import { ChangeEvent, FC, FormEvent, useState } from 'react';

import { AlignmentViewer } from 'components/AlignmentViewer';

import { useFormValidation } from 'hooks/useFormValidation';

import { Button } from 'ui/components/Button';
import { Input } from 'ui/components/Input';
import { Toast } from 'ui/components/Toast';

import { copyToClipboardWithToast } from 'utils/copyToClipboardWithToast';

import { Form, Title, Wrapper } from './styled';

interface ISequence {
  first: string;
  second: string;
}

export const AminoAcidAlign: FC = () => {
  const [sequence, setSequence] = useState<ISequence>({
    first: '',
    second: '',
  });
  const [sequenceFinal, setSequenceFinal] = useState<ISequence | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleSubmit = () => {
    setSequenceFinal({
      first: sequence.first.toUpperCase(),
      second: sequence.second.toUpperCase(),
    });
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSequence((prev) => ({ ...prev, [name]: value.replace(/\s+/g, '') }));
  };

  const { errors, isValid } = useFormValidation(
    sequence.first,
    sequence.second
  );

  const handleCopy = (text: string) => {
    copyToClipboardWithToast(text, setShowToast);
  };

  return (
    <Wrapper>
      <Title>Аминокислотное Выравнивание</Title>
      <Form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <Input
          value={sequence.first}
          onChange={onChangeHandler}
          name="first"
          placeholder="Введите первую последовательность"
          error={errors[0]}
          uppercase
        />
        <Input
          value={sequence.second}
          name="second"
          onChange={onChangeHandler}
          placeholder="Введите вторую последовательность"
          error={errors[1]}
          uppercase
        />
        <Button type="submit" onClick={handleSubmit} disabled={!isValid}>
          Выровнять
        </Button>
      </Form>

      {!!sequenceFinal && (
        <AlignmentViewer
          seq1={sequenceFinal.first}
          seq2={sequenceFinal.second}
          onCopy={handleCopy}
        />
      )}

      <Toast show={showToast}>Скопировано в буфер</Toast>
    </Wrapper>
  );
};
