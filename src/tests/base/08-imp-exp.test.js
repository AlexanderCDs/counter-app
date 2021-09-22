import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import { heroes } from '../../data/heroes';


describe('Test function heros', () => {
    test('should return hero by ID', () => {
        const id = 1; 
        const hero = getHeroeById(id);  
        const heroeData = heroes.find(h => h.id === id); 
        expect(hero).toEqual(heroeData) 
    });

    test('should return undefined if hero not exist', () => {
        const id = 10; 
        const hero = getHeroeById(id);   
        expect(hero).toBe(undefined) 
    });

    test('should return array heros of DC', () => {
        const owner = "DC";
        const result = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);
        expect(result).toEqual(heroeData)
    })
    
    test('should return array heros of Marvel', () => {
        const owner = "Mrvel";
        const result = getHeroesByOwner(owner).length;
        const heroeData = heroes.filter(h => h.owner === owner).length;
        expect(result).toBe(heroeData)
    })
})

