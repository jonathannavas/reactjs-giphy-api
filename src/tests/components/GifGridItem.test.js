import React from 'react';

import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test on GifGridItem.js', () => {

    const title = 'This is a title';
    const url = 'https://localhost/hola.jpg';

    const wrapper = shallow( <GifGridItem title={title} url={url}/> );

    test('Test snapshot match', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Should get a p with the title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('should return an image like de props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src')).toBe( url );
    });

    test('should return title data on alt attribute', () => {
        const img = wrapper.find('img');
        expect( img.prop('alt') ).toBe( title );
    });

    test('should contain animate__fadeIn', ()=>{
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__fadeIn')).toBe( true );
    });
    
});