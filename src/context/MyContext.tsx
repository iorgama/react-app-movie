import React, {FC, useState} from 'react'

export interface AppContextInterface {
  movieName: string
  setMovieName: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = React.createContext<AppContextInterface>({} as AppContextInterface);

const AppContextProvider: FC = ({children}) => {
  const [movieName, setMovieName] = useState<string>('');

  return (
    <AppContext.Provider value={{movieName, setMovieName}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return React.useContext(AppContext);
}

export default AppContextProvider;