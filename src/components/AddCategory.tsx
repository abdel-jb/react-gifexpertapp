import React from 'react';

type TAddCategory = {
    setCategories: React.Dispatch<React.SetStateAction<string[]>> | any;
}

export const AddCategory = ({ setCategories }: TAddCategory): JSX.Element => {

    const [inputValue, setInputValue] = React.useState('');

    const handleInputChanhe = (e: React.FormEvent<HTMLInputElement>): void => {
        const { value } = e.target as HTMLInputElement;
        setInputValue(value);
    }

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(( category: string[] ) => (!category.find(e => e === inputValue) ? [inputValue, ...category] : category));
            setInputValue('');
        }
    };

    return (
        <form action="" onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChanhe }
            />
        </form>
    )
}
