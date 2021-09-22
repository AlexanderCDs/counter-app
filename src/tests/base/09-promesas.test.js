import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../data/heroes";



describe('Test with promise', () => {
    test('should return hero async', ( done ) => {
        const id = 1; 
        getHeroeByIdAsync(id)
        .then( hero => {
            expect(hero).toBe( heroes[0] );
            done();
        })
    });
    
    test('should get error if hero not exist', ( done ) => {
        const id = 10; 
        getHeroeByIdAsync(id)
        .catch( error => {
            expect(error).toBe( 'No se pudo encontrar el héroe' );
            done();
        });
    });
     
})
