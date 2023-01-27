import React, {useState,} from "react";
import Context from "../components/Context";

interface childrenProps {
    children: React.ReactNode;
  }

const Wrapper: React.FC<childrenProps> = ({children}) => {
    const [state, setState] = useState(true)
    const toggle = () => setState(!state)
    
    return (
        <Context.Provider value={{state, toggle}}>
            {children}
        </Context.Provider>
    )
}

export default Wrapper