import React from 'react';
import './secondPart.css';
import FirstRow from './firstRow/firstRow';
import Col1 from '../secondPart/col1/col1';
import Col2 from '../secondPart/col2/col2';

const secondPart = () => {
    return ( 
        <div className={'SecondPart'}>
            <div className={'FirstRow'}><FirstRow /></div>
            <div className={"container"}>
                <div className={'Col1'}><Col1 /></div>
                <div className={'Col2'}><Col2 /></div>
            </div>
        </div>
     );
}
 
export default secondPart;