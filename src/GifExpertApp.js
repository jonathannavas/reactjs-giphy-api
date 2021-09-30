import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Dbz','Saint Seiya', 'Death note']);

    // const handleAdd = () => {
    //     setCategories( cats => [...cats, 'Futurama'] );
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories={ setCategories } />

            <hr/>  

            <ol>
                { 
                    categories.map( category => {
                        return <li key={ category } > { category } </li>;
                    })
                }
            </ol>
        </>
    )
}
