import { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';


export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme()

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert("Login invalido", "Informe e-mail e senha.")

    }
  }
  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
      <Logo />

      <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input placeholder='E-mail'
        mb={4}
        InputLeftElement={<Icon as={<Envelope color={colors.green[500]} />} ml={4} />}
        onChangeText={setEmail}
      />
      <Input placeholder='Senha'
        mb={8}
        InputLeftElement={<Icon as={<Key color={colors.green[500]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title='Entar' w='full' onPress={handleSignIn} />
    </VStack>

  )
}