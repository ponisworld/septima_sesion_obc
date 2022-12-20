const datos = {
    nombre: 'Andrea',
    apellido: 'Bellver García',
    edad: 21,
    altura: 1.70,
    eresDesarrollador: false
}

let edad = datos.edad ;

const lista = [
    datos,
    {
        nombre: 'Aura',
        apellido: 'Gayá',
        edad: 21,
        altura: 1.57,
        eresDesarrollador: false    
    },
    {
        nombre: 'Marina',
        apellido: 'Alomar',
        edad: 21,
        altura: 1.63,
        eresDesarrollador: false
    }
];

const listaOrdenadaPorEdad = lista.sort(
    (a, b) => b.edad - a.edad
);