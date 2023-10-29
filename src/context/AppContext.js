import { createContext, useReducer, useEffect } from 'react'
import { useCollection } from '../hooks/useCollection';
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';

export const AppContext = createContext()

const initialState = {
    landingImages: [],
    rsvpImages: [],
    imagekitKeys: null,
    isLoading: true,
    error: null,
};

const appReducer = (state, action) => {
    switch (action.type) {
        case 'INIT':
            return {...state, ...action.payload }
        case 'SET_DATA':
          return { ...state, error: null, ...action.payload }
        case 'SET_IMAGEKITKEYS':
            return { ...state, error: null, imagekitKeys: action.payload }
        case 'SET_IS_LOADING':
            return { ...state, error: null, isLoading: action.payload }
        case 'SET_ERROR':
            return { ...state, error: action.payload, isLoading: false }
        default:
          return state
    }
}

export const AppContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(appReducer, initialState);
    const { documents, error } = useCollection("app");

    useEffect(() => {
        if(documents) {
            init()
        }
        // if(!documents && !error) dispatch({ type: 'SET_IS_LOADING', payload: true })
        if(error) {
            dispatch({ type: 'SET_IS_LOADING', payload: false })
            dispatch({ type: 'SET_ERROR', payload: error })
        }
    }, [documents]);

    const init = async () => {
        const { data } = await httpsCallable(functions, "getImagekitKeys")()
        // getImagekitKeys
        // dispatch({ type: 'INIT', payload: { imagekitKeys: data, isLoading: false }})
        dispatch({ type: 'INIT', payload: { imagekitKeys: data }})

        //get images
        dispatch({ type: 'SET_DATA', payload: documents.images })
        dispatch({ type: 'SET_IS_LOADING', payload: false })
    }

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
          { children }
        </AppContext.Provider>
      )
}