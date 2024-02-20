import { useContext } from "react"
import { UserContext } from "../contexts/user-context"

export const useUser = () => {
    return useContext(UserContext)
}