import React, { useCallback } from 'react';

import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

import {
  maskCep,
  maskPhone,
  maskCurrency,
  maskCPF,
  maskCNPJ,
} from '../../utils/masks';

interface InputProps extends TextInputProps {
  mask: 'cep' | 'phone' | 'currency' | 'cpf' | 'cnpj';
  inputMaskChange: any;
}

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {
  const handleChange = useCallback(
    (text: string) => {
      if (mask === 'cep') {
        const value = maskCep(text);
        inputMaskChange(value);
      }

      if (mask === 'phone') {
        const value = maskPhone(text);
        inputMaskChange(value);
      }

      if (mask === 'currency') {
        const value = maskCurrency(text);
        inputMaskChange(value);
      }

      if (mask === 'cpf') {
        const value = maskCPF(text);
        inputMaskChange(value);
      }

      if (mask === 'cnpj') {
        const value = maskCNPJ(text);
        inputMaskChange(value);
      }
    },
    [inputMaskChange, mask],
  );

  return (
    <>
      <Container>
        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => handleChange(text)}
          {...rest}
        />
      </Container>
    </>
  );
};

export default Input;
