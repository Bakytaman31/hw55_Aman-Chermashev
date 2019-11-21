import React from 'react';
import './Remote.css'

import meat from '../../../src/images/meat.jpeg';
import cheese from '../../../src/images/cheese.jpeg';
import salad from '../../../src/images/salad.jpeg';
import bacon from '../../../src/images/bacon.jpeg';
import trash from '../../images/trash.svg';

const Ingridient = [
    {name:'Meat', price: 50, image: meat},
    {name:'Cheese', price: 20, image: cheese},
    {name:'Salad', price: 5, image: salad},
    {name:'Bacon', price: 30, image: bacon},
];

const Remote = props => {
    return (
        <div className='remote'>
            {Ingridient.map((Ingridient, index) => {
                return <div className="ingridientInfo">
                    <img src={Ingridient.image} alt='#' onClick={() => props.addIngr(Ingridient)}/>
                    {Ingridient.name} <span> Price:{Ingridient.price}</span>
                    <p>Quantity: {props.ingridientQuantity[index].count}</p>
                    {props.ingridientQuantity[index].count > 0 &&
                        <img src={trash} alt='#' className='trash' onClick={() => props.removeIngridient(Ingridient)}/>
                }
                </div>
            })}

        </div>
    );
};

export default Remote;