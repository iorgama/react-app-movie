import React, {FC, useState} from 'react'

export interface ModalContextInterface {
  isShown: boolean
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>
  toggle: () => void;
}

export const ModalContext = React.createContext<ModalContextInterface>({} as ModalContextInterface);

const ModalContextProvider: FC = ({children}) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => {
    setIsShown(!isShown);
  }

  return (
    <ModalContext.Provider value={{isShown, setIsShown, toggle}}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContent = () => {
  return React.useContext(ModalContext);
}

export default ModalContextProvider;