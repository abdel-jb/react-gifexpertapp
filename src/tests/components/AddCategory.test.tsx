import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('Test in AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() =>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories/>);
    });

    test('should display correctly', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('should change input', () => {
        
        const input = wrapper.find('input');
        const value = 'Hello World';

        input.simulate('change', { target: { value } });

        const inputAfter = wrapper.find('input');

        expect( inputAfter.prop('value') ).toBe( value );

    });

    test('should not post the information with submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    // test('should call setCategories and clear input', () => {

    //     const input = wrapper.find('input');
    //     const value = 'Testing';

    //     input.simulate('change', { target: { value } });

    //     wrapper.find('form').simulate('submit', { preventDefault(){} });

    //     expect( setCategories ).toHaveBeenCalled();

    //     expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

    //     expect( input.prop('value') ).toBe('');


    // });
    
    
    
});
