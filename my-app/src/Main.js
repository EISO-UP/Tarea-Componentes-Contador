import React, {useState} from 'react';
import { AddCounter } from './Componenets/AddCounter';
import { ShowCounter } from './Componenets/ShowCounter';

import './styles.css'
const myVariable = 'this is a var'
export const Main = () => {
    const [number, setNumber] = useState(0);
    const onAdd = () => {
        setNumber(number + 1);
        console.log('I added one');
    }
    return(
        <>
            <ShowCounter number={number}/>
            <AddCounter onAddPress={onAdd}/>
        </>
    )
};