
describe( 'all test suites', () => { 
    test('equals strings ', () => {
        // 1. inicialización
        const message = "Hola, Goku";
    
        // 2. estímulo
        const message2 = `Hola, Goku`;
    
        // 3. observar el comportamiento
        expect( message ).toBe( message2 );
    })
});