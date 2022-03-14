import React from 'react';
import {Product} from '../types/product'

type ShowInfoProps = {
    person: Product
}

const ShowInfo = (props: ShowInfoProps) => {
    console.log(props);
    return <div>
        Name: {props.person.name}<br/>
        Age: {props.person.age}
    </div>
}
export default ShowInfo