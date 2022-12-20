//Hooks | Las funciones con el prefijo use son hooks
import { useState } from 'react';
//PropTypes
import	PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    //Declaración del hook
    // valor a usar | metodo para cambiar valor | valor inicial
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        //Llamada del hook
        setCounter( counter + 1);
    }

    const handleSubstract = () =>{
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (<>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }>  + 1 </button>
        <button onClick={ handleSubstract }>  - 1 </button>
        <button onClick={ handleReset }>  Reset </button>
    </>)  
}

CounterApp.propTypes = {
    value: PropTypes.number
}