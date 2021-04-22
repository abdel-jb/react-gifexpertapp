import React from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [''] }): JSX.Element => {

    const [categories, setCategories] = React.useState<string[] >( defaultCategories );

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                { categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                )) }
            </ol>
        </>
    )
}
