import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';




describe( 'Test in 02-template-string.js', () => { 
    test('Test GetSaludo debe retornar Hola Alexander', () => {
        // 1. inicialización
        const name = "Alexander";
    
        // 2. estímulo 
        const saludo = getSaludo(name);

        // 3. observar el comportamiento
        expect( saludo ).toBe( "Hola " + name )
    })

    test('Test GetSaludo debe retornar Hola Diana', () => {
        // 1. inicialización
        const name = "Diana";
    
        // 2. estímulo 
        const saludo = getSaludo();

        // 3. observar el comportamiento
        expect( saludo ).toBe( "Hola " + name )
    })
});