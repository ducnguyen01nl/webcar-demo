import classNames from 'classnames/bind';
import styles from './CarButton.module.scss';
// import Button from '~/components/Button';

import { useState } from 'react';

import useValueContext from '~/store/useValueContext';
// import { type } from '@testing-library/user-event/dist/type';

// export const ThemeContext = createContext();

const cx = classNames.bind(styles);

const types = ['All car', 'New car', 'Used car'];
function CarButton() {
    const contextValue = useValueContext();

    const { setThemeCar } = contextValue.carFilter;

    const [id, setId] = useState(0);

    // const [theme, setTheme] = useState(types[0]);

    const handleActive = (type, index) => {
        setId(index);
        setThemeCar(type);
    };

    return (
        <>
            {types.map((type, index) => (
                <button
                    key={index}
                    className={cx('btn-item', { active: id === index })}
                    onClick={() => handleActive(type, index)}
                >
                    {type}
                </button>
            ))}
        </>
    );
}

export default CarButton;
