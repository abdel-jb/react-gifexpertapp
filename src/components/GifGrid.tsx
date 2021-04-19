import React from 'react';

import { GifGridItem } from './GifGridItem';
import { TGifs } from '../utils/types';
import { useFetchGifs } from '../hooks/useFetchGifs';


type TGifGrid = {
    category: string
}

export const GifGrid = ({ category }: TGifGrid): JSX.Element => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading...</p> }

            <ul className="card-grid">
                { images.map(( img: TGifs ) => 
                    <GifGridItem
                        key={ img.id }
                        { ...img }
                    />
                )}
            </ul>
        </>
    )
}
