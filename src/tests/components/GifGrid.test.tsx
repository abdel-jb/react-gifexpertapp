import React from 'react';
import { shallow } from 'enzyme';

import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGrid } from '../../components/GifGrid';

jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid', () => {

    const category = 'One Punch';
    
    test('should display correctly', () => {
        
        // @ts-ignore
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);
        
        expect( wrapper ).toMatchSnapshot();
    
    });
    
    test('should show items when loading images useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/test.jpg',
            title: 'Test'
        }];

        // @ts-ignore
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });


        const wrapper = shallow(<GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( true );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        
    });
    
});
