const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe('Test on AddCategory.js', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    });

    test('Test to match snapshot', () => {
        expect( wrapper ).toMatchSnapshot()
    });

    test('Test on handleInputChange', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe( value );

    });

    test('Dont post info with de submit form ', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('should call setCategories and clear the input', () => {

        const value = 'Hola mundo';
        wrapper.find('input').simulate('change', { target:{ value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        expect( wrapper.find('input').prop('value') ).toBe('');

    });
    
});