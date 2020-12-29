// Importar Función
const moduloProducto = require('../source/producto.js')

// Declaración Función Prueba
const funcionPrueba = () => {
  const resultado = moduloProducto(2, 5)
  expect(resultado).toBe(10)
}

// Ejecución Prueba
it('Debería retornar el valor correcto del producto', funcionPrueba)