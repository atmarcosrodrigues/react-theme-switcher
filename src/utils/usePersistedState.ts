//useEffect: monitore and execute on change
import { useState, useEffect, Dispatch, SetStateAction } from "react";


type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
];


function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);

        if (storageValue){
            return JSON.parse(storageValue);
        } else {
            return initialState;
        }
    }
    
    );

    //always state be change do: setItem on localStorage
    useEffect( () => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state] );

    return [state, setState];
}

export default usePersistedState;