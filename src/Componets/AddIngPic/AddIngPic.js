import React from 'react'
import nanoid from 'nanoid'
import './AddIngPic.css'

const Img = array => {
    let bank = [];
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].count;j++){
            let div = <div className={array[i].name} key={nanoid()}/>;
            bank.push(div)
        }
    }
    return bank
};
const AddIngPic = props => {
    return(
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {Img(props.ing)}
            <div className="BreadBottom"></div>
        </div>
    )
};


export default AddIngPic;