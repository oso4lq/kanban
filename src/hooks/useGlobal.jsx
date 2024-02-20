import { useContext } from "react";
import { GlobalContext } from "../contexts/global-context";

export const useGlobal = () => {
    return useContext(GlobalContext)
}