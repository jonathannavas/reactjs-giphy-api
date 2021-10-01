import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('Test on GifExpertApp', () => {

    test('Should make a snapshot', ()=>{
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show the categories list', () => {
        const categories = ['dbz','death note'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    

});