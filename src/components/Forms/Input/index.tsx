import React, {FC, InputHTMLAttributes, useState} from 'react'
import { InputForm, Container, Error  } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string,
  type: string,
  label?: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const Input: FC<InputProps> = ({ id, name, setValue, ...props }) => {
  const [error, setError] = useState<string|null>(null);
  const handleBlur: React.FocusEventHandler<HTMLInputElement> = ({target: t}) =>{
    setError(null);
    if(t.value.length === 0){
      setError("*Preencha o campo para pesquisar!");
    }
  }
  
  return (
    <Container>
      <InputForm
        id={id}
        name={name}
        onChange={({ target }) => setValue(target.value)}
        onBlur={handleBlur}
        {...props}
      />
      
      {error && <Error>{error}</Error>}
      
    </Container>
  );
};
