import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [themeCar, setThemeCar] = useState('All car');
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const value = {
        carFilter: {
            themeCar,
            setThemeCar,
        },
        loginForm: {
            showLogin,
            setShowLogin,
        },
        registerForm: {
            showRegister,
            setShowRegister,
        },
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
