import { AppContext } from "../context/AppContext"
import { useContext } from "react"

export const useAppContext = () => {
  const context = useContext(AppContext)

  if(!context) {
    throw Error('App Context must be used inside an AppContextProvider')
  }

  return context
}