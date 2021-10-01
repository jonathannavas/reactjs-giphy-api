import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Test on GifGrid.js ', () => {

    const category = 'Hola mundo';

    test('Match Snapshot GifGrid.js', ()=>{

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show items when data is loaded useFetchGifs', () => {

        const gifs = [{
            id: 'abc',
            url: 'https//localhost/imagen.jpg',
            title: 'Cualquier cosa'
        }] 

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category } /> );
        
        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('p').exists() ).toBe( false );       
        expect( wrapper.find( 'GifGridItem' ).length).toBe(gifs.length);

    });



});