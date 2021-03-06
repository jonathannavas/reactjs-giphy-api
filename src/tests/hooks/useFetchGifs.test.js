import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe( 'test on useFetchGifs', () => {
    
    test('should return the initial state', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Death note') );
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    });

    test( 'should return an images arrays, loading: false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Death note') );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe(10)
        expect( loading ).toBe( false );

    });
    
});