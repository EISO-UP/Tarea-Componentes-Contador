import React from 'react';
import { AddCounter } from './Componenets/AddCounter';
import { ShowCounter } from './Componenets/ShowCounter';

import './styles.css'
const myVariable = 'this is a var'
export const Main = () => {
    return(
        <>
            <ShowCounter number={5}/>
            <AddCounter/>
        </>
    )
};