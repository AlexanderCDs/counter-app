import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Test 05-Funciones.js', () => {
    
    test('GetUser return Object', () => {
        const userTest = {
            uid: 'ABC123',
            userName: 'Diana Sillas'
        };

        const user = getUser();

        expect( user ).toEqual( userTest )
    })

    test('GetUsuarioActivo return Object', () => {
        const userTest = {
            uid: 'ABC567',
            userName: 'Diana Sillas'
        };

        const user = getUsuarioActivo('Diana Sillas');

        expect( user ).toEqual( userTest )
    })
    
})
