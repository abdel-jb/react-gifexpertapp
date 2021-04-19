import React from 'react';
import { getGifs } from '../helpers/getGifs';

type TUseFetchGifsState = {
    data: any[],
    loading: boolean 
}

export const useFetchGifs = ( category: string ) => {
    const [state, setState] = React.useState<TUseFetchGifsState>({
        data: [],
        loading: true
    });
    
    React.useEffect(() =>{
        getGifs(category)
            .then((imgs) => {
                setState({
                    data: imgs,
                    loading: false
                });
        });
    }, [category]);

    return state;
}