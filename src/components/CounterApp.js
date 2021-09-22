/**
 * @author: alexander 
**/
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {
    const [count, setCount] = useState(value);
    const handleAdd = () => setCount( (c) => c + 1 );
    const handleSubtract = () => setCount( (c) => c - 1 ); 
    const handleReset = () => setCount( value );
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { count } </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp
