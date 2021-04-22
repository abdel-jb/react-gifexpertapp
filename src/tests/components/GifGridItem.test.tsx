import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Tests in <GifGridItem />', () => {

    const props = {
        title: 'opm GIF',
        url: 'https://media0.giphy.com/media/oxbNORcXx76F2/giphy.gif?cid=41ddacc3jrujn7t2slz1g1f4ul0osaaytjq921so484i51cy&rid=giphy.gif&ct=g'
    }
    const wrapper = shallow(<GifGridItem {...props}/>);

    test('should show the component correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('should have a paragraph with a title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( props.title );
    });

    test('should have a image equal to the url and alt of props', () => {
        
        const img = wrapper.find('img');
        
        expect( img.prop('src') ).toBe( props.url );
        expect( img.prop('alt') ).toBe( props.title );

    });

    test('should have animate__fadeIn', () => {

        const li = wrapper.find('li.animate__fadeIn');

        expect( li.hasClass('animate__fadeIn') ).toBe( true );
 
    });
    
    
    
});
