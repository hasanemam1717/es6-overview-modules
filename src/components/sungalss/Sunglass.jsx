import React from 'react';
import './Sunglass.css'
import Watch from '../watch/Watch';
import {add,multiply} from '../../utilitis/Calculate.js'
// import add from '../../utilitis/Calculate';

const Sunglass = () => {
    const first = 55;
    const second = 100;
    const sum = add(first, second)
    const gun = multiply(first, second)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;