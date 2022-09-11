import Context from './Context';
import { useContext } from 'react';
const useValueContext = () => {
    const contextValue = useContext(Context);
    return contextValue;
};

export default useValueContext;
