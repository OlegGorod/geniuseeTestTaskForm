import { createContext, useState } from "react";
import constants from "../constants/Form";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [maskFormat, setMaskFormat] = useState([constants.FORMAT.PHONE]);

  return (
    <AppContext.Provider value={{ maskFormat, setMaskFormat }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
