import React, { useState } from 'react';

import { View, StatusBar } from 'react-native';
import Input from './src/components/Input';

const App: React.FC = () => {
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [currency, setCurrency] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: '#222c37' }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#222c37" />
      <Input
        value={cep}
        mask="cep"
        inputMaskChange={(text: string) => setCep(text)}
        maxLength={9}
        placeholder="Digite o seu CEP"
      />

      <Input
        value={phone}
        mask="phone"
        inputMaskChange={(text: string) => setPhone(text)}
        maxLength={14}
        placeholder="Digite o seu celular"
      />

      <Input
        value={currency}
        mask="currency"
        inputMaskChange={(text: string) => setCurrency(text)}
        placeholder="Digite o valor"
      />

      <Input
        value={cpf}
        mask="cpf"
        inputMaskChange={(text: string) => setCpf(text)}
        maxLength={14}
        placeholder="Digite o seu CPF"
      />

      <Input
        value={cnpj}
        mask="cnpj"
        inputMaskChange={(text: string) => setCnpj(text)}
        maxLength={18}
        placeholder="Digite o seu CNPJ"
      />
    </View>
  );
};

export default App;
