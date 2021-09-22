import { getImagen } from "../../base/11-async-await"




describe('Test with async-await and fetch', () => {
    test('should return url gif', async () => {
        const url = await getImagen(); 
        expect(typeof url).toBe('string');
    })
    
})
