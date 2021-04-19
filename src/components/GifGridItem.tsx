import React from 'react';

import { TGifs } from '../utils/types';


export const GifGridItem = ( { id, title, url }: TGifs ): JSX.Element => {
    return (
        <li className="card animate__animated animate__bounce">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </li>
    )
}
