import { getGifs } from "../../helpers/getGifs";

describe('Test on getGifs.js fetch', () => {

    test('should return 10 elements', async() => {
        const data = await getGifs('Ecuador');
        expect( data.length ).toBe( 10 );
    });

    test('Should test if dont get any category on getGifs.js', async () => {
        const data = await getGifs('');
        expect( data.length ).toBe( 0 );
    });
});