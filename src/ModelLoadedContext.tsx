
import { ReactNode, createContext, useState } from "react";

interface ModelLoadedContextProps {
  modelLoaded: boolean;
  changeState: (state: boolean) => void;
}

export const ModelLoadedContext = createContext<ModelLoadedContextProps>({
  modelLoaded: false,
  changeState: () => {}, // Provide a dummy function here if needed
});

const ModelLoadedContextProvider = ({ children } : {children: ReactNode}) => {
  const [modelLoaded, setModelLoaded] = useState(false);
  const changeState = (state: boolean) => setModelLoaded(state)
  return (
    <ModelLoadedContext.Provider value={{ modelLoaded, changeState }}>
      {children}
    </ModelLoadedContext.Provider>
  );
};

export default ModelLoadedContextProvider;
