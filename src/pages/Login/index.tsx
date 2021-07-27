import {useState} from 'react'
import { Button } from '../../components/Forms/Button';
import { useTheme } from 'styled-components';
import { Input } from '../../components/Forms/Input';
import { Wrapper } from './style';
import { useHistory } from 'react-router-dom';
import { useModalContent } from '../../context/ModalContext';

export const Login = () => {
  
  const [email, setEmail] = useState<string>("");  
  const [password, setPassword] = useState<string>("");  
  const history = useHistory();  
  const { toggle } = useModalContent();

  const redirectHome = () =>{    
    if(password.trim().length > 0 && email.trim().length > 0){
      console.log('teste')
      toggle();
      history.push('/');
    }
  }

  const Theme = useTheme();
  return (
      <Wrapper>
        <Input
          id="email"
          type="email"
          value={email} 
          setValue={setEmail}
          placeholder="E-mail"
        />
        <Input
          id="password"
          type="password"
          value={password} 
          setValue={setPassword}
          placeholder="Senha"
        />
        <Button onClick={redirectHome} title="Logar" color={Theme.palette.primary} fontColor={Theme.palette.common} padding="5" />
      </Wrapper>
  )
}
