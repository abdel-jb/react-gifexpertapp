import React from 'react';

import { TGifs } from '../utils/types';


export const GifGridItem = ( { title, url }: TGifs ): JSX.Element => {
    return (
        <li className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </li>
    )
}
