import {createContext} from "react";

export interface contextType {
    state: boolean;
    toggle: () => void;
}

const Context = createContext<contextType>({
    state: true,
    toggle: () => {}
})



export default Context