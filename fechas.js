let fechaActual = new Date();

let birthday = new Date(2001, 4, 21, 18, 42);

let comparacion = fechaActual > birthday;

let diaNacimiento = birthday.getDate();
let mesNacimiento = birthday.getMonth() + 1;
let yearNacimiento = birthday.getFullYear();