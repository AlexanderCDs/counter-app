
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

export const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

export const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
export const saludar4 = () => `Hola Mundo`;

export const getUser = () => ({
        uid: 'ABC123',
        userName: 'Diana Sillas'
});

// Tarea
export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    userName: nombre
})



